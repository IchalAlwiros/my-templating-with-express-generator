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
      this.belongsTo(models.Users,{
        foreignKey:'user_id',
        as:'users'
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

// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {

//       await queryInterface.createTable('notes', {
//          id: {
//          type:  Sequelize.INTEGER,
//          primaryKey: true,
//          allowNull: false,
//          autoIncrement: true,
//         },
//         title:{
//           type: Sequelize.STRING,
//           allowNull: false
//         },
//         description:{
//           type: Sequelize.STRING,
//           allowNull: true,
//         },
//         user_id:{
//           type: Sequelize.INTEGER,
//           allowNull: false,
//           unique: true,
//         },
//       });

//       await queryInterface.addConstraint('notes',{
//         type: 'foreign key',
//         name: 'user_id_notes',
//         fields:['user_id'],
//         references:{
//           table: 'users',
//           field: 'id'
//         },
//         onDelete: 'cascade',
//         onUpdate: 'cascade'
//       });
    
//   },

//   async down (queryInterface, Sequelize) {
    
//     await queryInterface.dropTable('notes');
    
//   }
// };