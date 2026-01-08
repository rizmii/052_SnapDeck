const deckService = require('../services/decks.service');

class DeckController {
  getAll(req, res) {
    const { archetype, source } = req.query;
    const decks = deckService.getAllDecks({ archetype, source });

    res.json({
      data: decks,
      total: decks.length
    });
  }

  getById(req, res) {
    const deck = deckService.getDeckById(req.params.id);

    if (!deck) {
      return res.status(404).json({
        message: 'Deck not found'
      });
    }

    res.json(deck);
  }
}

module.exports = new DeckController();
