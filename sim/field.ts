const Creature = require('./creature.ts').default;
const Food = require('./food.ts').default;

class Field {
  creatureCount: number;
  fieldSize: number;
  creatures = new Array<typeof Creature>();
  foodCount: number;
  food = new Array<typeof Food>();
  matrix: any[][];

  constructor (fieldSize = 20, creatureCount = 30) {
    this.fieldSize = fieldSize;
    this.creatureCount = creatureCount;
    this.foodCount = creatureCount * 2;
    this.creatures = new Array<typeof Creature>();
    this.food = new Array<typeof Food>();

    this.matrix = []
  }

  buildMatrix () {
    this.matrix = Array(this.fieldSize).fill(0).map(() => Array(this.fieldSize).fill(0));
  }


  populate () {
    this.creatures = [];
    for (let i = 0; i < this.creatureCount; i++) {
      this.createCreature()
    }
  }

  positionCreatures () {
    for (let i = 0; i < this.creatures.length; i++) {
      this.creatures[i].load(this.matrix);
    }
  }

  createCreature () {
    this.creatures.push(new Creature ())
  }

  generateFood () {
    this.food = [];
    for (let i = 0; i < this.foodCount; i++) {
      this.placeFood();
    }
  }

  placeFood () {
    const x = Math.floor(Math.random() * (this.fieldSize * 0.8)) + (this.fieldSize * 0.1)
    const y = Math.floor(Math.random() * (this.fieldSize * 0.8)) + (this.fieldSize * 0.1)
    this.food.push(new Food(x, y));
  }
}

export default Field;
