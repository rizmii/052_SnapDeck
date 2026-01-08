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
    if (decks.length === 0) return null;

    switch (mode) {
      case 'ladder':
        return decks.reduce((best, deck) =>
          deck.winRate > best.winRate ? deck : best
        );

      case 'budget':
        return decks.reduce((best, deck) =>
          deck.cards.length < best.cards.length ? deck : best
        );

      case 'random':
      default:
        return decks[Math.floor(Math.random() * decks.length)];
    }
  }
}

module.exports = new DeckService();
