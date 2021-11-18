const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize =  new Sequelize({
    dialect: 'sqlite',
    storage: '../../database.sqlite'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.media = require("./media.model.js")(sequelize, Sequelize);

module.exports = db;
