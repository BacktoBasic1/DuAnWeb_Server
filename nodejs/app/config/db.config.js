const Sequelize = require('sequelize');
const sequelize = new Sequelize('reactjs_todo', 'phuongnguyen', 'qweqwe123', {
  dialect: 'mysql',
  host: 'db4free.net',
  port: 3306,
  logging: false, // tắt log
});

module.exports = sequelize;