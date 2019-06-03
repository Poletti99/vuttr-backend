const routes = require('express').Router();

const Tool = require('./models/Tool');

routes.get('/tools', async (req, res) => {
  const { tag } = req.query;

  return res.json(await Tool.find(tag ? { tags: tag } : undefined));
});

routes.post('/tools', async (req, res) => {
  const tool = await Tool.create(req.body);
  return res.json(tool);
});

module.exports = routes;
