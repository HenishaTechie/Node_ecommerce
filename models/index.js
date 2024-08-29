const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('node_ecommerce', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });

  const db ={};
  db.sequelize = sequelize;

  db.User =  require("./user")(sequelize,DataTypes);

  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  db.sequelize
  .sync({
    force: true,
    // alter: true,
  })
  .then(() => {
    console.log("table created");
  })
  .catch((error) => {
    console.log("Error in table creation", error);
  });

  module.exports = db;