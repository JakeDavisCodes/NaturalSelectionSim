import React from 'react';

const Field = require('../../../sim/public/field.js').default;

function App ({}) {
  const [field, setField] = React.useState(new Field());
  console.log(field)

  return (
    <p>Hello World</p>
  )
};

export default App;
