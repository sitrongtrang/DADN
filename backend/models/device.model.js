const db = require('../config/connect_db');

const getDeviceList = async (id) => {
    try {
        const [result] = await db.execute('SELECT * FROM device WHERE UserID = ?', [id])
        console.log(result)
        return result
    } catch (error) {
        console.error("Error during finding user by id", error);
        throw error;
    }
}

module.exports = {
    getDeviceList
};