const adjectives = ['confused', 'legendary', 'great', 'werid', 'fabled', 'mythical', 'godly', 'absolutely fabulous', 'apocryphal', 'awful', 'keen', 'zesty', 'superior', 'shoddy', 'weak', 'ruthless', 'zealous', 'unpleasent', 'incredible', 'demonic', 'mighty', 'feral'];
const nouns = ['autonoumus unicorn', 'one', 'being', 'god', 'fool', 'clown', 'buffoon', 'monster', 'pirate', 'software developer', 'butter eater', 'child', 'beast', 'creature', 'sim', 'mouse', 'cheeto lover']
const names = ['Shep Josh', 'Shep Kally', 'Shep Sean', 'Shep Soph', '"Nat"', 'Aimee', 'Alex', 'Archaa', 'Arpan', 'Mr. August', 'President Bolton', 'Space Bolton', 'Brett', 'Britta', 'Daniel', 'David', 'Demi', 'Donna', 'Erik', 'Gauri', 'George', 'Jacob', 'Jake', 'Jerrod', 'Jessica', 'Kathy', 'Kevin GPT', 'Kev', 'Mark', 'Mylani', 'Nathaniel', 'Patrick', 'Quanjing', 'Samuel', 'Sandy', 'Terrence', 'Tom', 'Tyler', 'Will', 'Josh', 'Zhixiang', 'Uncle J']

class Creature {
  size: number;
  sight: number;
  movementSpeed: number;

  name: string;
  generationsSurvived: number;
  children: number;
  foodEaten: number;
  creaturesKilled: number;

  x: number;
  y: number;
  type: string;

  constructor () {
    this.name = `The ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}, ${names[Math.floor(Math.random() * names.length)]}`
    this.movementSpeed = 1;
    this.sight = 2;
    this.generationsSurvived = 0;
    this.children = 0;
    this.foodEaten = 0;
    this.size = Math.floor(Math.random() * 10 + 10);
    this.creaturesKilled = 0;
    this.type = 'creature';

    this.x = 0;
    this.y = 0;
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
console.log(this.x, this.y)
    if (matrix[this.y][this.x] === 0) {
      matrix[this.y][this.x] = this;
    } else {
      console.log('OCCUPIED' , matrix[this.y][this.x])
      this.load(matrix);
    }
  }

  eat () {
    this.foodEaten++;
  }

  fight (opponent: Creature) {
    if (opponent.size === this.size) return Math.floor(Math.random() * 2) === 1 ? true : false;
    return this.size > opponent.size;
  }
}

export default Creature;
