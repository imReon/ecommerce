const express = require('express');
const app = express();

const serverConfig = require('./config/config')

const db = require('./models')

let categoriesData = [
  {name: "Electronic",
  description: "This category contains electronic applieances"},
  {name: "vegitables",
  description: "This category contains greens"}
]

db.Category.bulkCreate(categoriesData).then(()=>{
  console.log("category table is initializing with category data")
}).catch((err)=>{
  console.log("Error in initializing categories table", err)
})

db.sequelize.sync({force: true}).then(()=>{
  console.log('models/tables are dropped and recreated');
})

app.listen(serverConfig.PORT, ()=>{
  console.log("server is running on port 3000");
})
