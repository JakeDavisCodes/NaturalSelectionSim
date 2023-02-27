import React from 'react';

function Display ({ field, onSelect }) {

  return (
    <div id="Display">
      {field.matrix.map((col) => (
        <div className="col">
          {col.map((square) => (
            <div className={`square ${square === 0 ? 'empty' : square.type}`} onClick={() => onSelect(square)}></div>
          ))}
        </div>
      ))}
    </div>
  )
};

export default Display;
