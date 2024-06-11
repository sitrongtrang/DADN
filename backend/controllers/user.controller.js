const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const secretKey = process.env.SECRET_KEY || 'your-secret-key';

const register = async (req, res) => {
  const { email, password, fullname, region, phone } = req.body.user;
  try {
    const result = await User.addUser(email, password, fullname, region, phone);
    if (result.success){
      console.log("add user successfully in controller")
      res.status(200).json({ message: result.message });
    }
    else{
      res.status(400).send({message: result.message})
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body.user;
  try {
    const user = await User.findUserByEmail(email);
    if (user && await bcrypt.compare(password, user.Password)) {
      const token = jwt.sign({ id: user.ID }, secretKey, { expiresIn: '1h' });
      res.status(200).send({message: "user login succcessfully", token: token });
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
    res.status(302).send({user: {
      id: user.ID,
      email: user.Email,
      fullname: user.Fullname,
      phone: user.Phone,
      region: user.Region
    }, message: "get user information successfully"});
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
