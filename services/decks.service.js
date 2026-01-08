const deckRepository = require('../repositories/decks.repository');

class DeckService {
  getAllDecks(filter = {}) {
    let decks = deckRepository.findAll();

    if (filter.archetype) {
      decks = decks.filter(
        d => d.archetype.toLowerCase() === filter.archetype.toLowerCase()
      );
    }

    if (filter.source) {
      decks = decks.filter(
        d => d.source.toLowerCase() === filter.source.toLowerCase()
      );
    }

    return decks;
  }

  getDeckById(id) {
    return deckRepository.findById(id);
  }

  routeDeck(mode = 'random') {
  const decks = deckRepository.findAll();
  if (decks.length === 0) {
    const error = new Error('No decks available');
    error.statusCode = 404;
    throw error;
  }

  const allowedModes = ['ladder', 'budget', 'random'];
  if (mode && !allowedModes.includes(mode)) {
    const error = new Error('Invalid routing mode');
    error.statusCode = 400;
    throw error;
  }

  switch (mode) {
    case 'ladder':
      return decks.reduce((best, deck) =>
        deck.winRate > best.winRate ? deck : best
      );
    case 'budget':
      return decks.reduce((best, deck) =>
        deck.cards.length < best.cards.length ? deck : best
      );
    default:
      return decks[Math.floor(Math.random() * decks.length)];
  }
}

}

module.exports = new DeckService();
