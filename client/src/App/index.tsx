import React from 'react';

const Field = require('../../../sim/field.ts').default;

function App ({}) {
  const [field, setField] = React.useState(new Field());
  console.log(field)

  return (
    <p>Hello </p>
  )
};

export default App;
