'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class emotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.emotion.belongsTo(models.comment)
    }
  };
  emotion.init({
    mood: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'emotion',
  });
  return emotion;
};