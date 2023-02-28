import React from 'react';
const Field = require('../../../sim/field.ts').default;

function Controls ({ field, setField, update }) {
  const [fieldSize, setFieldSize] = React.useState();
  const [creatureCount, setCreatureCount] = React.useState();
  const [foodAmount, setFoodAmount] = React.useState();
  const [foodOffset, setFoodOffset] = React.useState();

  const [species, setSpecies] = React.useState([]);
  const [movementSpeed, setMovementSpeed] = React.useState(1);
  const [sight, setSight] = React.useState(2);
  const [mutationRate, setMutationRate] = React.useState(1);
  const [size, setSize] = React.useState(1);
  const [carnivore, setCarnivore] = React.useState(false);

  const createField = () => {
    const field = new Field(fieldSize, creatureCount, foodAmount, foodOffset)
    field.populate(species)
    field.buildMatrix()
    field.generateFood()
    field.positionCreatures()
    setField(field)
  }
  const addSpecies = () => {
    const newSpecies = {
      speciesId: species.length + 1,
      movementSpeed,
      sight,
      mutationRate,
      size,
      carnivore,
    }
    console.log(newSpecies)
    setSpecies([...species, newSpecies]);
  }
  const step = () => {
    field.step();
    update();
  }
  const generation = () => {
    field.nextGen();
    update();
    console.log('g')
  }

  return (
    <div id="Controls">
      <div id="NewField">
        <p>Field Options</p>
        <label>Field Size: </label>
        <input type="text" id="fieldSize" onChange={(e) => setFieldSize(+e.target.value)}></input>
        <label>Creature Count: </label>
        <input type="text" id="creatureCount" onChange={(e) => setCreatureCount(+e.target.value)}></input>
        <label>Food Amount: </label>
        <input type="text" id="foodAmount" onChange={(e) => setFoodAmount(+e.target.value)}></input>
        <label>Food Offset: </label>
        <input type="text" id="foodOffset" onChange={(e) => setFoodOffset(+e.target.value)}></input>
        <button id="CreateField" onClick={createField}>Create!</button>
      </div>
      <div id="NewSpecies">
        <p>Species Options</p>
        <h3>Species being added: {species.length}</h3>
        <label>Movement Speed: </label>
        <input type="text" id="movementSpeed" onChange={(e) => setMovementSpeed(+e.target.value)}></input>
        <label>Sight Distance: </label>
        <input type="text" id="sight" onChange={(e) => setSight(+e.target.value)}></input>
        <label>Mutation Rate: </label>
        <input type="text" id="mutationRate" onChange={(e) => setMutationRate(+e.target.value)}></input>
        <label>Size: </label>
        <input type="text" id="size" onChange={(e) => setSize(+e.target.value)}></input>
        <label>Carnivore: </label>
        <input type="checkbox" id="Carnivore" onChange={(e) => setCarnivore(!carnivore)}></input>
        <button id="AddSpecies" onClick={addSpecies}>Add!</button>
      </div>
      <button className="step" onClick={step}>Step</button>
      <button className="generation" onClick={generation}>Next Generation</button>
    </div>
  )
};

export default Controls;
