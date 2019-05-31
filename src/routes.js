const routes = require('express').Router();

routes.get('/tools', (req, res) => {
  return res.send('aaaaaaa')
})

module.exports = routes;
