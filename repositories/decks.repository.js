const Deck = require('../models/deck.model');

class DeckRepository {
  async findAll() {
    return await Deck.findAll();
  }

  async findById(id) {
    return await Deck.findByPk(id);
  }

  async findByArchetype(archetype) {
    return await Deck.findAll({
      where: { archetype }
    });
  }
}

module.exports = new DeckRepository();
