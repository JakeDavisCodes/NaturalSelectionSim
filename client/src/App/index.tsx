import React from 'react';
import Display from './Display';

const Field = require('../../../sim/field.ts').default;

function App () {
  const [field, setField] = React.useState(new Field());
  field.populate()
  field.buildMatrix()
  field.generateFood()
  field.positionCreatures()
  console.log(field.matrix, field.matrix[0])
  console.log(field.creatures[0])
  console.log('food', field.food[1])

  return (
    <div>
      <Display field={field} />
    </div>
  )
};

export default App;
