const mongoose= require("mongoose");
const initializeDatabase = require("../func/initializeDatabase");


async function MongoDB() {
  try {
    console.log('=======CONNETING DATABASE=========');
    await mongoose.connect(process.env.MONGO_URI);
<<<<<<< HEAD
    //initializeDatabase()
=======
    initializeDatabase()
>>>>>>> c287c6d66c084c15cced55e39be086883e4e2d3d
    console.log('=======DATABASE CONNECTED=========');
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

module.exports = MongoDB;