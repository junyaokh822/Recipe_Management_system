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
     validate: {
      notEmpty: {
        msg: 'Title is required.',
      },
      lessThanThreeChar(value) {
        if (value.length<3) {
          throw new Error('title cannot be less than 3 characters.');
        }
      }
      }
    },
    description: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description is required.',
        },
        greaterThanFiveHundredChar(value) {
          if (value.length>500) {
            throw new Error('desription cannot be more than 500 characters.');
          }
        }
        }
    },
    ingredients: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description is required.',
        },
        greaterThanOneThousandChar(value) {
          if (value.length>1000) {
            throw new Error('Ingredients cannot be more than 1000 characters.');
          }
        }
        }
    },
    instructions: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Instructions is required.',
        },
        greaterThanFiveThousandsChar(value) {
          if (value.length>5000) {
            throw new Error('Instructions cannot be more than 5000 characters.');
          }
        }
        }
    },
    createdAt: {
      type:DataTypes.DATE,
      allowNull:true,
      validate: {
        isPast: function(value) {
          if (value && this.updatedAt && value > this.updatedAt) {
            throw new Error("Created date cannot be after the updated date.");
          }
        },
      },
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull:true,
      validate: {
        isBefore: function(value) {
          if (value && this.updatedAt && value < this.createdAt) {
            throw new Error("Updated date cannot be before the created date.");
          }
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes',
    underscored: true 
  });
  return Recipe;
};