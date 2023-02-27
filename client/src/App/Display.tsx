import React from 'react';

function Display ({ field }) {

  return (
    <div id="Display">
      {field.matrix.map((col) => (
        <div className="col">
          {col.map((square) => (
            <div className={`square ${square === 0 ? 'empty' : square.type}`}></div>
          ))}
        </div>
      ))}
    </div>
  )
};

export default Display;
