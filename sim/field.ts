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
  stepsTaken: number;
  maxSteps: number;

  constructor (fieldSize = 20, creatureCount = 30, foodCount: number, foodOffest = 0.1) {
    this.fieldSize = fieldSize;
    this.creatureCount = creatureCount;
    this.foodCount = foodCount || creatureCount * 2;
    this.foodOffest = foodOffest;
    this.maxSteps = 15;
    this.creatures = new Array<typeof Creature>();
    this.food = new Array<typeof Food>();

    this.matrix = []
    this.stepsTaken = 0;
  }

  nextGen () {
    while (this.stepsTaken < this.maxSteps) {
      this.step();
    }

    const next = [];
    for (let i = 0; i < this.creatures.length; i++) {
      console.log(`${this.creatures[i].name}, ${this.creatures[i].foodEaten}`)
      if (this.creatures[i].foodEaten > 0) {
        this.creatures[i].generationsSurvived++;
        next.push(this.creatures[i])
        for (let j = 0; j < this.creatures[i].foodEaten - 1; j++) {
          this.creatures[i].children++;
          console.log(`${this.creatures[i].name} had a child!`)
          const child = new Creature();
          child.mutateFrom(this.creatures[i])
          next.push(child);
        }
      }
      this.creatures[i].foodEaten = 0;
    }
    this.creatures = next;

    this.buildMatrix();
    this.positionCreatures();
    this.generateFood();

    this.stepsTaken = 0;
  }

  step () {
    if (this.stepsTaken >= this.maxSteps) {
      this.nextGen();
      return;
    }
    for (let i = 0; i < this.creatures.length; i++) {
      this.creatures[i].step(this.matrix);
    }
    this.stepsTaken++;
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

  averages () {
    let mutationRate: number = 0, sight: number = 0, movementSpeed: number = 0;

    for (let i = 0; i < this.creatures.length; i++) {
      mutationRate += this.creatures[i].mutationRate;
      sight += this.creatures[i].sight;
      movementSpeed += this.creatures[i].movementSpeed;
    }

    mutationRate = Math.floor(mutationRate * 100 / this.creatures.length) / 100;
    sight = Math.floor(sight * 100 / this.creatures.length) / 100;
    movementSpeed = Math.floor(movementSpeed * 100 / this.creatures.length) / 100;

    return {
      movementSpeed,
      sight,
      mutationRate,
    }
  }
}

export default Field;
