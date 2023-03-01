import Creature from "./creature";

class Carnivore extends Creature {
  constructor (movementSpeed: number, sight: number, mutationRate: number, size: number, speciesId: number = 1) {
    super(movementSpeed, sight, mutationRate, size, speciesId);

    this.type = 'carnivore'
  }

  eatCreature (creature: { size: number; dead: boolean; x: number; y: number; }) {
    this.foodEaten += creature.size;
    creature.dead = true;
    creature.x = -1;
    creature.y = -1;
  }

  view (matrix: any[][]) {
    const seen: any[] = []

    let curr: number;
    for (let i = 1; i <= this.sight; i++) {
      curr = this.x + i;
      if (curr > matrix.length - 1 || curr < 0 || matrix[this.y][curr].type === 'food') break;
      if (matrix[this.y][curr].type === 'creature' && matrix[this.y][curr].size <= this.size + 0.2) {
        seen.push(matrix[this.y][curr]);
        break;
      }
    }
    for (let i = 1; i <= this.sight; i++) {
      curr = this.x - i;
      if (curr > matrix.length - 1 || curr < 0 || matrix[this.y][curr].type === 'food') break;
      if (matrix[this.y][curr].type === 'creature' && matrix[this.y][curr].size <= this.size + 0.2) {
        seen.push(matrix[this.y][curr]);
        break;
      }
    }
    for (let i = 1; i <= this.sight; i++) {
      curr = this.y + i;
      if (curr > matrix.length - 1 || curr < 0 || matrix[curr][this.x].type === 'food') break;
      if (matrix[curr][this.x].type === 'creature' && matrix[curr][this.x].size <= this.size + 0.2) {
        seen.push(matrix[curr][this.x]);
        break;
      }
    }
    for (let i = 1; i <= this.sight; i++) {
      curr = this.y - i;
      if (curr > matrix.length - 1 || curr < 0 || matrix[curr][this.x].type === 'food') break;
      if (matrix[curr][this.x].type === 'creature' && matrix[curr][this.x].size <= this.size + 0.2) {
        seen.push(matrix[curr][this.x]);
        break;
      }
    }

    return seen[0];
  }

  move (matrix: any[][], dir: string) {
    let x: number, y: number;
    if (dir === 'right') x = this.x + 1
    if (dir === 'left') x = this.x - 1
    if (dir === 'up') y = this.y + 1
    if (dir === 'down') y = this.y - 1
    const target = matrix[y || this.y][x || this.x];

    if (target === 0 || target.type === 'creature') {
      matrix[y || this.y][x || this.x] = this;
      matrix[this.y][this.x] = 0;
      this.y = y || this.y;
      this.x = x || this.x;
      target.type === 'creature' ? this.eatCreature(target) : null;
    }
  }
}

export default Carnivore;
