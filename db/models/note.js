
const {DataTypes} = require('sequelize');
const sequelize = require("..")

module.exports = sequelize.define("note", {
  // product id
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
