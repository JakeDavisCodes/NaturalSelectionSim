import React from 'react';

const Field = require('../../../sim/field.ts').default;

function App () {
  const [field, setField] = React.useState(new Field());
  field.populate()
  console.log(field.creatures[0])

  return (
    <p>Hello </p>
  )
};

export default App;
