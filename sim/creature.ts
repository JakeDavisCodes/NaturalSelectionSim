const adjectives = ['confused', 'legendary', 'great', 'werid', 'fabled', 'mythical', 'godly', 'absolutely fabulous', 'apocryphal', 'awful', 'keen', 'zesty', 'superior', 'shoddy', 'weak', 'ruthless', 'zealous', 'unpleasent', 'incredible', 'demonic', 'mighty', 'feral'];
const nouns = ['autonoumus unicorn', 'one', 'being', 'god', 'fool', 'clown', 'buffoon', 'monster', 'pirate', 'software developer', 'butter eater', 'child', 'beast', 'creature', 'sim', 'mouse', 'cheeto lover']
const names = ['Shep Josh', 'Shep Kally', 'Shep Sean', 'Shep Soph', '"Nat"', 'Aimee', 'Alex', 'Archaa', 'Arpan', 'Mr. August', 'President Bolton', 'Space Bolton', 'Brett', 'Britta', 'Daniel', 'David', 'Demi', 'Donna', 'Erik', 'Gauri', 'George', 'Jacob', 'Jake', 'Jerrod', 'Jessica', 'Kathy', 'Kevin GPT', 'Kev', 'Mark', 'Mylani', 'Nathaniel', 'Patrick', 'Quanjing', 'Samuel', 'Sandy', 'Terrence', 'Tom', 'Tyler', 'Will', 'Josh', 'Zhixiang', 'Uncle J']

class Creature {
  mutationRate: number;
  sight: number;
  movementSpeed: number;

  name: string;
  generationsSurvived: number;
  children: number;
  foodEaten: number;
  creaturesKilled: number;
  lastDir: string;

  x: number;
  y: number;
  type: string;

  constructor () {
    this.name = `The ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}, ${names[Math.floor(Math.random() * names.length)]}`
    this.movementSpeed = 1;
    this.sight = 2;
    this.mutationRate = 1;
    this.generationsSurvived = 0;
    this.children = 0;
    this.foodEaten = 0;
    this.creaturesKilled = 0;
    this.type = 'creature';

    this.x = 0;
    this.y = 0;
    this.lastDir = null;
  }

  load (matrix: any[][]) {
    const wall = Math.floor(Math.random() * 4);
    const fieldSize = matrix.length - 1;

    if (wall === 0) {
      this.x = Math.floor(Math.random() * fieldSize)
      this.y = 0;
    } else if (wall === 1) {
      this.x = fieldSize;
      this.y = Math.floor(Math.random() * fieldSize)
    } else if (wall === 2) {
      this.x = Math.floor(Math.random() * fieldSize)
      this.y = fieldSize;
    } else {
      this.x = 0;
      this.y = Math.floor(Math.random() * fieldSize)
    }

    if (matrix[this.y][this.x] === 0) {
      matrix[this.y][this.x] = this;
    } else {
      this.load(matrix);
    }
  }

  eat () {
    this.foodEaten++;
  }

  view (matrix: any[][]) {
    const seen: any[] = []

    let curr;
    for (let i = 1; i <= this.sight; i++) {
      curr = this.x + i;
      if (curr > matrix.length - 1 || curr < 0 || matrix[this.y][curr].type === 'creature') break;
      if (matrix[this.y][curr].type === 'food') {
        seen.push(matrix[this.y][curr]);
        break;
      }
    }
    for (let i = 1; i <= this.sight; i++) {
      curr = this.x - i;
      if (curr > matrix.length - 1 || curr < 0 || matrix[this.y][curr].type === 'creature') break;
      if (matrix[this.y][curr].type === 'food') {
        seen.push(matrix[this.y][curr]);
        break;
      }
    }
    for (let i = 1; i <= this.sight; i++) {
      curr = this.y + i;
      if (curr > matrix.length - 1 || curr < 0 || matrix[curr][this.x].type === 'creature') break;
      if (matrix[curr][this.x].type === 'food') {
        seen.push(matrix[curr][this.x]);
        break;
      }
    }
    for (let i = 1; i <= this.sight; i++) {
      curr = this.y - i;
      if (curr > matrix.length - 1 || curr < 0 || matrix[curr][this.x].type === 'creature') break;
      if (matrix[curr][this.x].type === 'food') {
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

    if (target === 0 || target.type === 'food') {
      matrix[y || this.y][x || this.x] = this;
      matrix[this.y][this.x] = 0;
      this.y = y || this.y;
      this.x = x || this.x;
      target.type === 'food' ? this.eat() : null;
    }
  }

  step (matrix: any[][]) {
    let steps:number = this.movementSpeed;

    while (steps !== 0) {
      const view = this.view(matrix);
      let dir;

      if (view) {
        if (view.x > this.x) dir = 'right';
        if (view.x < this.x) dir = 'left';
        if (view.y > this.y) dir = 'up';
        if (view.y < this.y) dir = 'down';
      } else {
        dir = this.lastDir ? [this.lastDir, this.lastDir] : [];
        if (this.x + 1 < 20) dir.push('right');
        if (this.x - 1 >= 0) dir.push('left');
        if (this.y + 1 < 20) dir.push('up');
        if (this.y - 1 >= 0) dir.push('down');
        dir = dir[Math.floor(Math.random() * dir.length)];
      }
      this.move(matrix, dir);
      steps--;
    }
  }
}

export default Creature;
