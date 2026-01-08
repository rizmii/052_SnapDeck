const Deck = require('../models/deck.model');
const sequelize = require('../config/database');

async function seed() {
  await sequelize.sync({ force: true });

  await Deck.bulkCreate([
    {
      id: 'deck-001',
      name: 'Destroy Budget',
      archetype: 'Destroy',
      cards: ['Nova', 'Bucky Barnes', 'Carnage'],
      source: 'snap.fan',
      winRate: 55.2,
      patch: '5.1'
    },
    {
      id: 'deck-002',
      name: 'Shuri Red Skull',
      archetype: 'Shuri',
      cards: ['Shuri', 'Red Skull', 'Taskmaster'],
      source: 'marvelsnap.pro',
      winRate: 59.8,
      patch: '5.1'
    }
  ]);

  console.log('Seed data inserted');
  process.exit();
}

seed();
