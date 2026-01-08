class DeckService {
  async getAllDecks(filter = {}) {
    let decks = await deckRepository.findAll();

    if (filter.archetype) {
      decks = decks.filter(d =>
        d.archetype.toLowerCase() === filter.archetype.toLowerCase()
      );
    }

    if (filter.source) {
      decks = decks.filter(d =>
        d.source.toLowerCase() === filter.source.toLowerCase()
      );
    }

    return decks;
  }

  async getDeckById(id) {
    return await deckRepository.findById(id);
  }

  async routeDeck(mode = 'random') {
    const decks = await deckRepository.findAll();
    if (decks.length === 0) throw new Error('No decks available');

    if (mode === 'ladder') {
      return decks.reduce((best, d) => d.winRate > best.winRate ? d : best);
    }

    if (mode === 'budget') {
      return decks.reduce((best, d) => d.cards.length < best.cards.length ? d : best);
    }

    return decks[Math.floor(Math.random() * decks.length)];
  }
}
