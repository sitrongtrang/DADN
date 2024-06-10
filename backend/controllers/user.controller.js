const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const secretKey = process.env.SECRET_KEY || 'your-secret-key';

const register = async (req, res) => {
  const { email, password, fullname, region, phone } = req.body;
  try {
    await User.addUser(email, password, fullname, region, phone);
    res.status(201).send({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findUserByEmail(email);
    if (user && await bcrypt.compare(password, user.Password)) {
      const token = jwt.sign({ id: user.ID }, secretKey, { expiresIn: '1h' });
      res.send({ user, token });
    } else {
      res.status(401).send({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findUserById(req.user.ID);
    res.send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const logout = (req, res) => {
    // For JWT, logout is typically handled on the client side by removing the token.
    res.send({ message: 'User logged out successfully' });
  };

module.exports = {
  register,
  login,
  getUser,
  logout
};
