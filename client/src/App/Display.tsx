import React from 'react';

function Display ({ field, onSelect }) {

  return (
    <div id="Display" className="white sidesShadow">
      {field.matrix.map((col) => (
        <div className="col">
          {col.map((square) => {
            return <div className={`square ${square === 0 ? 'empty' : square.type === 'food' ? 'food' : 'species' + square.speciesId}`} onClick={() => onSelect(square)}></div>
          })}
        </div>
      ))}
    </div>
  )
};

export default Display;
