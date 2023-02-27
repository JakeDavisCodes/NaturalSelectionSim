import React from 'react';
const Field = require('../../../sim/field.ts').default;

function Controls ({ field, setField, update }) {
  const [fieldSize, setFieldSize] = React.useState();
  const [creatureCount, setCreatureCount] = React.useState();
  const [foodAmount, setFoodAmount] = React.useState();
  const [foodOffset, setFoodOffset] = React.useState();

  const createField = () => {
    const field = new Field(fieldSize, creatureCount, foodAmount, foodOffset)
    field.populate()
    field.buildMatrix()
    field.generateFood()
    field.positionCreatures()
    setField(field)
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
    </div>
  )
};

export default Controls;
