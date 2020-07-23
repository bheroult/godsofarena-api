'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable("Gladiators", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: DataTypes.ENUM('Epéiste', 'Lancier', 'Cavalier', 'Archer', 'Animal'),
        allowNull: false,
        defaultValue: 'Epéiste'
      },
      ModifierContent: {
        type: DataTypes.STRING,
        references: {
          model: "Modifiers",
          key: "title"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: true
      }
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable("Gladiators");
  }
};
