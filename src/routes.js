const routes = require('express').Router();
const jwt = require('jsonwebtoken');
const swaggerUi = require('swagger-ui-express')

const Tool = require('./models/Tool');
const authMiddleware = require('./middlewares/authMiddleware');
const swaggerDocument = require('../swagger.json');

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.get('/auth', (req, res) => {
  const token = jwt.sign({}, process.env.SECRET_KEY, { expiresIn: 86400 });
  return res.json({ token });
});

routes.use(authMiddleware);

routes.get('/tools', async (req, res) => {
  const { tag } = req.query;

  return res.json(await Tool.find(tag ? { tags: tag } : undefined));
});

routes.post('/tools', async (req, res) => {
  const tool = await Tool.create(req.body);
  return res.json(tool);
});

routes.delete('/tools/:id', async (req, res) => {
  await Tool.findByIdAndDelete(req.params.id);
  return res.json({})
})

module.exports = routes;
