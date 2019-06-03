const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' });
  }

  const [scheme, token] = authHeader.split(' ');

  try {
    await promisify(jwt.verify)(token, process.env.SECRET_KEY);

    return next();
  }
  catch (err) {
    return res.status(401).send({ error: 'Invalid Token' })
  }
}