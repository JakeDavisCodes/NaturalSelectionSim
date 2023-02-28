const Creature = require('./creature.ts').default;
const Food = require('./food.ts').default;

class Field {
  creatureCount: number;
  fieldSize: number;
  creatures = new Array<typeof Creature>();
  foodCount: number;
  food = new Array<typeof Food>();
  matrix: any[][];
  foodOffest: any;

  constructor (fieldSize = 20, creatureCount = 30, foodCount, foodOffest = 0.1) {
    this.fieldSize = fieldSize;
    this.creatureCount = creatureCount;
    this.foodCount = foodCount || creatureCount * 2;
    this.foodOffest = foodOffest;
    this.creatures = new Array<typeof Creature>();
    this.food = new Array<typeof Food>();

    this.matrix = []
  }

  step () {
    for (let i = 0; i < this.creatures.length; i++) {
      this.creatures[i].step(this.matrix);
    }
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
      this.createFood();
    }
    this.foodCount = Math.floor(this.foodCount * (1 - this.foodOffest))
  }

  createFood () {
    const thisFood = new Food()
    thisFood.load(this.matrix);
    this.food.push(thisFood);
  }
}

export default Field;
