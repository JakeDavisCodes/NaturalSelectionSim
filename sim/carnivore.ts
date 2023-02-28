import Creature from "./creature";

class Carnivore extends Creature {
  constructor (movementSpeed: number, sight: number, mutationRate: number, speciesId: number = 1) {
    super(movementSpeed, sight, mutationRate, speciesId);

    this.type = 'carnivore'

    console.log(this)
  }
}

export default Carnivore;
