'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey:'user_id',
        as:'user'
      })
      // Article.belongsTo(models.User,{
      //   foreignKey:'user_id',
      //   as: 'users'
      // })
    }
  }
  Article.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    decription: DataTypes.STRING,
    user_id:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};