'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('Modifiers', [
      {
        title: 'Choix d épée',
        options: ['épée à une main', 'épée à deux mains']
      },
      {
        title: 'Type d épée',
        options: ['épée longue', 'sabre', 'glaive', 'épée', 'épée du Gondor']
      },
      {
        title: 'Type de lance',
        options: ['trident', 'pilum', 'hallebarde']
      },
      {
        title: 'Cuirasse',
        options: ['cuirasse légère', 'cuirasse lourde']
      },
      {
        title: 'Type d arc',
        options: ['arc anglais', 'arc chinois', 'arc des Elfes']
      },
    ], {});
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Modifiers', null, {});
  }
};