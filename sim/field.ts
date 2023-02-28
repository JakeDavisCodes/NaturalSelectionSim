import Carnivore from "./carnivore";
import Creature from './creature';
import Food from './food';

class Field {
  creatureCount: number;
  fieldSize: number;
  creatures: any[];
  foodCount: number;
  food: Food[];
  matrix: any[][];
  foodOffest: any;
  stepsTaken: number;
  maxSteps: number;
  generation: number;

  constructor (fieldSize = 20, creatureCount = 30, foodCount: number, foodOffest = 0.1) {
    this.fieldSize = fieldSize;
    this.creatureCount = creatureCount;
    this.foodCount = foodCount || creatureCount * 2;
    this.foodOffest = foodOffest;
    this.maxSteps = 15;
    this.creatures = [];
    this.food = [];

    this.matrix = []
    this.stepsTaken = 0;
    this.generation = 1;
  }

  nextGen () {
    while (this.stepsTaken < this.maxSteps) {
      this.step();
    }

    const next = [];
    for (let i = 0; i < this.creatures.length; i++) {
      if (this.creatures[i].foodEaten > 0 && !this.creatures[i].dead) {
        this.creatures[i].generationsSurvived++;
        next.push(this.creatures[i])
        for (let j = 0; j < this.creatures[i].foodEaten - 1; j++) {
          this.creatures[i].children++;
          const child = this.creatures[i].type === 'carnivore' ? new Carnivore(1, 1, 2, 1) : new Creature(1, 1, 2, 1);
          child.mutateFrom(this.creatures[i])
          next.push(child);
        }
      }
      this.creatures[i].foodEaten = 0;
    }
    // for (let i = 0; i < 3; i++) next.push(new Creature(1, 2, 1, 1, 3))
    this.creatures = next;

    this.buildMatrix();
    this.positionCreatures();
    this.generateFood();

    this.stepsTaken = 0;
    this.generation++;
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

  populate (species) {
    console.log(species)
    this.creatures = [];
    if (species.length > 0) {
      console.log(species)
      for (let i = 0; i < species.length; i++) {
        const speciesId = species[i].speciesId;
        const movementSpeed = species[i].movementSpeed;
        const sight = species[i].sight;
        const mutationRate = species[i].mutationRate;
        const size = species[i].size;
        const carnivore = species[i].carnivore;
        for (let j = 0; j < this.creatureCount / species.length; j++) {
          this.createCreature(movementSpeed, sight, mutationRate, speciesId, size, carnivore)
        }
      }
    } else {
      for (let i = 0; i < this.creatureCount; i++) {
        this.createCreature(1, 2, 1, 1, 1, false)
      }
    }
  }

  positionCreatures () {
    for (let i = 0; i < this.creatures.length; i++) {
      this.creatures[i].load(this.matrix);
    }
  }

  createCreature (movementSpeed, sight, mutationRate, speciesId, size, carnivore) {
    if (carnivore) this.creatures.push(new Carnivore (movementSpeed, sight, mutationRate, size, speciesId))
    else this.creatures.push(new Creature (movementSpeed, sight, mutationRate, size, speciesId))
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

  stats () {
    let mutationRate: number = 0, sight: number = 0, movementSpeed: number = 0, size: number = 0;
    const species = {};

    for (let i = 0; i < this.creatures.length; i++) {
      species[this.creatures[i].speciesId]++;
      mutationRate += this.creatures[i].mutationRate;
      sight += this.creatures[i].sight;
      movementSpeed += this.creatures[i].movementSpeed;
      size += this.creatures[i].size;
    }

    mutationRate = Math.floor(mutationRate * 100 / this.creatures.length) / 100;
    sight = Math.floor(sight * 100 / this.creatures.length) / 100;
    movementSpeed = Math.floor(movementSpeed * 100 / this.creatures.length) / 100;
    size = Math.floor(size * 100 / this.creatures.length) / 100;

    return {
      species,
      averages :{
        movementSpeed,
        sight,
        mutationRate,
        size,
      },
      gen: this.generation,
      creatureNum: this.creatures.length,
    }
  }
}

export default Field;
