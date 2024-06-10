const db = require('../config/database');
const bcrypt = require('bcrypt');

const addUser = async (email, password, fullname, region, phone) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO User (ID, Email, Password, Fullname, Region, Phone) VALUES (UUID(), ?, ?, ?, ?, ?)';
    db.query(query, [email, hashedPassword, fullname, region, phone], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT ID, Email, Fullname, Region, Phone FROM User WHERE Email = ?';
    db.query(query, [email], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT ID, Email, Fullname, Region, Phone FROM User WHERE ID = ?';
    db.query(query, [id], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

module.exports = {
  addUser,
  findUserByEmail,
  findUserById,
};
