class Deck {
  constructor({
    id,
    name,
    archetype,
    cards,
    source,
    winRate,
    patch
  }) {
    this.id = id;
    this.name = name;
    this.archetype = archetype;
    this.cards = cards;
    this.source = source;
    this.winRate = winRate;
    this.patch = patch;
  }
}

module.exports = Deck;
