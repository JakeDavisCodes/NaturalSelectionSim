import React from 'react';
import Controls from './Controls';
import Details from './Details';
import Display from './Display';

const Field = require('../../../sim/field.ts').default;

function App () {
  const [field, setField] = React.useState(new Field());
  const [selected, setSelected] = React.useState();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  React.useEffect(() => {
    field.populate()
    field.buildMatrix()
    field.generateFood()
    field.positionCreatures()
    console.log(field.matrix, field.matrix[0])
    console.log(field.creatures[0])
    console.log('food', field.food[1])

    forceUpdate();
  }, [])

  const onSelect = (square: any) => {
    if (square === 0) return;
    if (square.type === 'creature') setSelected(square);
  }

  return (
    <div id="Container">
      <Controls field={field} setField={setField} update={forceUpdate} />
      <Display field={field} onSelect={onSelect} />
      <Details selected={selected} />
    </div>
  )
};

export default App;
