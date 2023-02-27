import React from 'react';

const Field = require('../../../sim/field.ts').default;

function App () {
  const [field, setField] = React.useState(new Field());
  field.populate()
  field.generateFood()
  console.log(field.creatures[0])
  console.log(field.food[1])

  return (
    <p>Hello </p>
  )
};

export default App;
