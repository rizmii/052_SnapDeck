const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deck = sequelize.define('Deck', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  archetype: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cards: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  source: {
    type: DataTypes.STRING
  },
  winRate: {
    type: DataTypes.FLOAT
  },
  patch: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'decks',
  timestamps: false
});

module.exports = Deck;
