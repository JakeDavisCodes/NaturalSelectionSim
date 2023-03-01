import axios from 'axios';
import React from 'react';
import Controls from './Controls';
import Details from './Details';
import Display from './Display';

const Field = require('../../../sim/field.ts').default;

function App () {
  const [field, setField] = React.useState(new Field());
  const [selected, setSelected] = React.useState();
  const [user, setUser] = React.useState();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  React.useEffect(() => {
    const cookie = document.cookie.match(/s_id=[^;]+/)[0].split('=')[1];
    if (cookie) {
      axios({
        method: 'GET',
        url: `session/${cookie}`
      })
        .then((data) => {
          console.log(data)
          setUser(data);
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [])

  React.useEffect(() => {
    field.populate([])
    field.buildMatrix()
    field.generateFood()
    field.positionCreatures()

    forceUpdate();
  }, [])

  const onSelect = (square: any) => {
    if (square === 0) return;
    if (square.type === 'creature' || 'carnivore') setSelected(square);
  }

  let stats = field.stats();

  return (
    <div id="all">
      <div id="Stats">
        <div id="GenStats">
          <h1>Generation {stats.gen}</h1>
          <p>{stats.creatureNum} Total Creatures</p>
          {stats.species.map((specie: number, idx: number) =>
            <p>Species ID-{idx + 1} has {specie} members</p>
          )}
        </div>
        <div id="Averages">
          <h2>Averages</h2>
          <p>{`Mutation Rate: ${stats.averages.mutationRate}`}</p>
          <p>{`Movement Speed: ${stats.averages.movementSpeed}`}</p>
          <p>{`Sight Distance: ${stats.averages.sight}`} </p>
          <p>{`Size: ${stats.averages.size}`} </p>
        </div>
      </div>
      <div id="Container" className="sidesShadow">
        <Controls field={field} setField={setField} update={forceUpdate} />
        <Display field={field} onSelect={onSelect} />
        <Details selected={selected} />
      </div>
    </div>
  )
};

export default App;
