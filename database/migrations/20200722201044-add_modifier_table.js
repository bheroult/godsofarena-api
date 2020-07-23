'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable("Modifiers", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      options: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      }
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable("Modifiers");
  }
};
