const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const secretKey = process.env.SECRET_KEY || 'your-secret-key';

const authenticate = async (req, res, next) => {
  if (['/api/user/register', '/api/user/login'].includes(req.path)) {
    return next();
  }

  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ error: 'Please authenticate' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    const user = await User.findUserById(decoded.id);
    if (!user) {
      throw new Error('User not found');
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ error: 'Invalid token' });
  }
};

module.exports = authenticate;
