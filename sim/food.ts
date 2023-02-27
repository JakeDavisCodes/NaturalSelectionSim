class Food {
  x: number;
  y: number;
  type: string;

  constructor () {
    this.x = 0;
    this.y = 0;
    this.type = 'food';
  }

  load (matrix: any[][]) {
    const fieldSize = matrix.length - 1;

    this.x = Math.floor(Math.random() * (fieldSize * 0.8)) + Math.ceil(fieldSize * 0.1);
    this.y = Math.floor(Math.random() * (fieldSize * 0.8)) + Math.ceil(fieldSize * 0.1);

    if (matrix[this.y][this.x] === 0) {
      matrix[this.y][this.x] = this;
    } else {
      this.load(matrix);
    }
  }
}

export default Food;
