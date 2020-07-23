'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('Gladiators', [
      {
        name: 'Maximus',
        type: 'Epéiste',
        ModifierTitle: 'Choix d épée'
      },
      {
        name: 'Spartacus',
        type: 'Epéiste',
        ModifierTitle: 'Choix d épée'
      },
      {
        name: 'Priscus',
        type: 'Epéiste',
        ModifierTitle: 'Type d épée'
      },
      {
        name: 'Pollux',
        type: 'Epéiste',
        ModifierTitle: 'Type d épée'
      },
      {
        name: 'Ganicus',
        type: 'Lancier',
        ModifierTitle: 'Type de lance'
      },
      {
        name: 'Crixus',
        type: 'Lancier',
        ModifierTitle: 'Type de lance'
      },
      {
        name: 'Jeanclaudedus',
        type: 'Cavalier',
        ModifierTitle: 'Cuirasse'
      },
      {
        name: 'Spiculus',
        type: 'Cavalier',
        ModifierTitle: 'Cuirasse'
      },
      {
        name: 'Commodus',
        type: 'Archer',
        ModifierTitle: 'Type d arc'
      },
      {
        name: 'Flamma',
        type: 'Archer',
        ModifierTitle: 'Type d arc'
      },
      {
        name: 'Mouton Noir',
        type: 'Animal',
        ModifierTitle: 'Cuirasse'
      },
      {
        name: 'Tigre',
        type: 'Animal',
        ModifierTitle: 'Cuirasse'
      },
      {
        name: 'Lion',
        type: 'Animal',
        ModifierTitle: 'Cuirasse'
      }
    ], {});
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Gladiators', null, {});
  }
};
