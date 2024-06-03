const config=require('../config/database_Config')
const Sequelize=require("sequelize")
const sequelize=new Sequelize(config.DB,config.USER,config.password,{
    host:config.HOST,
    dialect:config.dialect,
    operatorsAliases:false,
    pool:{
        max:config.pool.max,
        min:config.pool.min,
        acquire:config.pool.acquire,
        idle:config.pool.idle
    }
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize
db.PrLineItems=require("./prLineItems")(sequelize,Sequelize)
db.VendorUsers=require("./vendorUsers")(sequelize,Sequelize)
module.exports=db;

