'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('Gladiators', [
      {
        name: 'Maximus',
        type: 'Epéiste',
        ModifierContent: 'Choix d épée'
      },
      {
        name: 'Spartacus',
        type: 'Epéiste',
        ModifierContent: 'Choix d épée'
      },
      {
        name: 'Priscus',
        type: 'Epéiste',
        ModifierContent: 'Type d épée'
      },
      {
        name: 'Pollux',
        type: 'Epéiste',
        ModifierContent: 'Type d épée'
      },
      {
        name: 'Ganicus',
        type: 'Lancier',
        ModifierContent: 'Type de lance'
      },
      {
        name: 'Crixus',
        type: 'Lancier',
        ModifierContent: 'Type de lance'
      },
      {
        name: 'Jeanclaudedus',
        type: 'Cavalier',
        ModifierContent: 'Cuirasse'
      },
      {
        name: 'Spiculus',
        type: 'Cavalier',
        ModifierContent: 'Cuirasse'
      },
      {
        name: 'Commodus',
        type: 'Archer',
        ModifierContent: 'Type d arc'
      },
      {
        name: 'Flamma',
        type: 'Archer',
        ModifierContent: 'Type d arc'
      },
      {
        name: 'Mouton Noir',
        type: 'Animal',
        ModifierContent: 'Cuirasse'
      },
      {
        name: 'Tigre',
        type: 'Animal',
        ModifierContent: 'Cuirasse'
      },
      {
        name: 'Lion',
        type: 'Animal',
        ModifierContent: 'Cuirasse'
      }
    ], {});
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Gladiators', null, {});
  }
};
