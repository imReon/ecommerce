/*
* THis file will be used for:
----createing db connection with the help of sequalize ORM
---- export all the functionalities of models
----- if someone imports this index.js then they can just import./models

*/


const Sequelize = require('sequelize');
const dbConfig = require('../config/config.json');
const env = "development";
const dbSettings = dbConfig[env];
const sequelize = new Sequelize(
  dbSettings.database,
  dbSettings.username,
  dbSettings.password,
  dbSettings.dialectInformation
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Category = require('./category.model')(sequelize, Sequelize);
module.exports = db;
