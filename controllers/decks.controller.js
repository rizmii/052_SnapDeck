const deckService = require('../services/decks.service');

class DeckController {
 async getAll(req, res, next) {
  try {
    const decks = await deckService.getAllDecks(req.query);
    res.json({ success: true, data: decks });
  } catch (err) {
    next(err);
  }
}

async getById(req, res, next) {
  try {
    const decks = await deckService.getDeckById(req.params.id);
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



async route(req, res, next) {
    try {
      const { mode } = req.query;
      const deck = await deckService.routeDeck(mode);

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
