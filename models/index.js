const config = require("../config/db.config.js");


const Sequelize = require("sequelize");


const sequelize = new Sequelize(




	);


const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;
    
