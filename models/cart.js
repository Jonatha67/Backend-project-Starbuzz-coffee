const { users } = require('./users')

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart.belongsTo(models.users)
      cart.hasMany(models.cartItem)
      cart.sync()
    }
  }
  cart.init({}, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};