const adjectives = ['confused', 'legendary', 'great', 'werid', 'fabled', 'mythical', 'godly', 'absolutely fabulous', 'apocryphal', 'awful', 'keen', 'zesty', 'superior', 'shoddy', 'weak', 'ruthless', 'zeaslous', 'unpleasent', 'autounomous unicorn', 'demonic', 'mighty'];
const names = ['Shep Josh', 'Shep Kally', 'Shep Sean', 'Shep Soph', '"Nat"', 'Aimee', 'Alex', 'Archaa', 'Arpan', 'Mr. August', 'President Bolton', 'Space Bolton', 'Brett', 'Britta', 'Daniel', 'David', 'Demi', 'Donna', 'Erik', 'Gauri', 'George', 'Jacob', 'Jake', 'Jerrod', 'Jessica', 'Kathy', 'Kevin GPT', 'Kev', 'Mark', 'Mylani', 'Nathaniel', 'Patrick', 'Quanjing', 'Samuel', 'Sandy', 'Terrence', 'Tom', 'Tyler', 'Will', 'Josh', 'Zhixiang']

class Creature {
  movementSpeed: number;
  stepsToChangeDirection: number;
  name: string;
  generationsSurvived: number;
  children: number;

  constructor () {
    this.name = `The ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${names[Math.floor(Math.random() * names.length)]}`
    this.movementSpeed = Math.random() * 2 + 4;
    this.stepsToChangeDirection = Math.floor(Math.random() * 2 + 2);
    this.generationsSurvived = 0;
    this.children = 0;
  }
}

export default Creature;
