const db = require('../config/connect_db');
const bcrypt = require('bcrypt');

const addUser = async (email, password, fullname, region, phone) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);
    const [result] = await db.execute('INSERT INTO User (ID, Email, Password, Fullname, Region, Phone) VALUES (UUID(), ?, ?, ?, ?, ?)',
      [email, hashedPassword, fullname, region, phone]
    )
    if (result.affectedRows > 0) {
      console.log("User registered successfully");
      return { success: true, message: "User registered successfully" };
    } else {
      console.log("Failed to register user");
      return { success: false, message: "Failed to register user" };
    }
  } catch (error) {
    console.error("Error during addUser:", error);
    throw error;
  }
};

const findUserByEmail = async (email) => {
  try {
    const [result] = await db.execute('SELECT * FROM User WHERE Email = ?',
      [email]
    )
    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error during finding user by email", error);
    throw error;
  }
};

const findUserById = async (id) => {
  try {
    const [result] = await db.execute('SELECT * FROM User WHERE ID = ?',
      [id]
    )
    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error during finding user by id", error);
    throw error;
  }
};

module.exports = {
  addUser,
  findUserByEmail,
  findUserById,
};
