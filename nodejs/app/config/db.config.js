const Sequelize = require('sequelize');
const sequelize = new Sequelize('reactjs_todo', 'phuongnguyen', 'V-i$q9ezA!f7uEn', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false, // tắt log
});

module.exports = sequelize;