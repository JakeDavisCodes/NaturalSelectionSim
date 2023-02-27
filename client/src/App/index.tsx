import React from 'react';

const Field = require('../../../sim/field.ts');

function App ({}) {
  const [field, setField] = React.useState(new Field());
  console.log(field)

  return (
    <div id="App">
      <p>Hello World</p>
    </div>
  )
};

export default App;
