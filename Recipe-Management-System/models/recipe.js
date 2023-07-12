'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init({
    title: {
     type: DataTypes.STRING,
     allowNull: false,
    },
    description: {
      type:DataTypes.TEXT,
      allowNull: false,
    },
    ingredients: {
      type:DataTypes.TEXT,
      allowNull: false,
    },
    instructions: {
      type:DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes',
    underscored: true 
  });
  return Recipe;
};