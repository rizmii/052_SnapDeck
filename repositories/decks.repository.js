const Deck = require('../models/deck.model');
const decksData = require('../data/decks.json');

class DeckRepository {
  findAll() {
    return decksData.map(deck => new Deck(deck));
  }

  findById(id) {
    const deck = decksData.find(d => d.id === id);
    return deck ? new Deck(deck) : null;
  }

  findByArchetype(archetype) {
    return decksData
      .filter(d => d.archetype.toLowerCase() === archetype.toLowerCase())
      .map(d => new Deck(d));
  }
}

module.exports = new DeckRepository();
