const routes = require('express').Router();

const Tool = require('./models/Tool');

routes.get('/tools', async (req, res) => {
  const tools = await Tool.find();
  return res.json(tools);
});

routes.post('/tools', async (req, res) => {
  const tool = await Tool.create(req.body);
  return res.json(tool);
});

module.exports = routes;
