const adjectives = ['confused', 'legendary', 'great', 'werid', 'fabled', 'mythical', 'godly', 'absolutely fabulous', 'apocryphal', 'awful', 'keen', 'zesty', 'superior', 'shoddy', 'weak', 'ruthless', 'zealous', 'unpleasent', 'incredible', 'demonic', 'mighty', 'feral'];
const nouns = ['autonoumus unicorn', 'one', 'being', 'god', 'fool', 'clown', 'buffoon', 'monster', 'pirate', 'software developer', 'butter eater', 'child', 'beast', 'creature', 'sim', 'mouse', 'cheeto lover']
const names = ['Shep Josh', 'Shep Kally', 'Shep Sean', 'Shep Soph', '"Nat"', 'Aimee', 'Alex', 'Archaa', 'Arpan', 'Mr. August', 'President Bolton', 'Space Bolton', 'Brett', 'Britta', 'Daniel', 'David', 'Demi', 'Donna', 'Erik', 'Gauri', 'George', 'Jacob', 'Jake', 'Jerrod', 'Jessica', 'Kathy', 'Kevin GPT', 'Kev', 'Mark', 'Mylani', 'Nathaniel', 'Patrick', 'Quanjing', 'Samuel', 'Sandy', 'Terrence', 'Tom', 'Tyler', 'Will', 'Josh', 'Zhixiang', 'Uncle J']

class Creature {
  size: number;
  movementSpeed: number;
  stepsToChangeDirection: number;

  name: string;
  generationsSurvived: number;
  children: number;
  foodEaten: number;
  creaturesKilled: number;

  x: number;
  y: number;

  constructor () {
    this.name = `The ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}, ${names[Math.floor(Math.random() * names.length)]}`
    this.movementSpeed = Math.random() * 2 + 4;
    this.stepsToChangeDirection = Math.floor(Math.random() * 2 + 2);
    this.generationsSurvived = 0;
    this.children = 0;
    this.foodEaten = 0;
    this.size = Math.floor(Math.random() * 20 + 10);
    this.creaturesKilled = 0;

    this.x = 0;
    this.y = 0;
  }

  load (fieldSize: number) {
    const top = Math.floor(Math.random() * 2) === 0 ? false : true;
    const right = Math.floor(Math.random() * 2) === 0 ? false : true;

    this.y = top ? fieldSize * 0.8 : 0;
    this.y += Math.floor(Math.random() * (fieldSize * 0.1 + 1));
    this.x = right ? fieldSize * 0.8 : 0;
    this.x += Math.floor(Math.random() * (fieldSize * 0.1 + 1));

    console.log(this.x, this.y)
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
