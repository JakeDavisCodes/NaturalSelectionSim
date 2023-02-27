const Creature = require('./creature.ts');

class Field {
  creatureCount: number;
  fieldSize: number;
  creatures =  new Array<typeof Creature>();

  constructor (fieldSize = 20, creatureCount = 50) {
    this.fieldSize = fieldSize;
    this.creatureCount = creatureCount;
    this.creatures = [];

  }

  populate () {
    this.creatures = [];
    for (let i = 0; i < this.creatureCount; i++) {
      this.creatures.push(new Creature ())
    }
  }

  createCreature () {

  }
}