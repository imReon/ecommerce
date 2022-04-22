const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const dbConfig = require('./config/config.json');
const serverConfig = require('./config/config')

const env = "development";
const dbSettings = dbConfig[env];
const sequelize = new Sequelize(
  dbSettings.database,
  dbSettings.username,
  dbSettings.password,
  dbSettings.dialectInformation
);

app.listen(serverConfig.PORT, async ()=>{
  console.log("server is running on port 3000");
  try{
    await sequelize.authenticate();
    console.log("connected to db")
  }
  catch(error){
    console.log("unable to connect to db: ", error)
  }
})
