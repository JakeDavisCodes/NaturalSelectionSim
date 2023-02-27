const Creature = require('./creature.ts').default;

class Field {
  creatureCount: number;
  fieldSize: number;
  creatures =  new Array<typeof Creature>();

  constructor (fieldSize = 20, creatureCount = 50) {
    this.fieldSize = fieldSize;
    this.creatureCount = creatureCount;
    this.creatures = new Array<typeof Creature>();

  }

  populate () {
    this.creatures = [];
    for (let i = 0; i < this.creatureCount; i++) {
      this.createCreature()
    }
  }

  createCreature () {
    this.creatures.push(new Creature ())
  }
}

export default Creature;
