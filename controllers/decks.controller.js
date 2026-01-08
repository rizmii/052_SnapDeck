const deckService = require('../services/decks.service');

class DeckController {
  getAll(req, res, next) {
    try {
      const { archetype, source } = req.query;
      const decks = deckService.getAllDecks({ archetype, source });

      res.json({
        success: true,
        data: decks,
        total: decks.length
      });
    } catch (err) {
      next(err);
    }
  }

  getById(req, res, next) {
    try {
      const deck = deckService.getDeckById(req.params.id);

      if (!deck) {
        const error = new Error('Deck not found');
        error.statusCode = 404;
        throw error;
      }

      res.json({
        success: true,
        data: deck
      });
    } catch (err) {
      next(err);
    }
  }

  route(req, res, next) {
    try {
      const { mode } = req.query;
      const deck = deckService.routeDeck(mode);

      res.json({
        success: true,
        mode: mode || 'random',
        data: deck
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new DeckController();
