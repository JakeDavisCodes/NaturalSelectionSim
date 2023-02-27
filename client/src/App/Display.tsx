import React from 'react';

function Display ({ field, setField }) {

  return (
    <div
      id="Display"
      style={{
        width: field.fieldSize * 50 + 'px',
        height: field.fieldSize * 50 + 'px',
      }}
    >
      <div id="Food">
        {(field.food.map((food) => <div
          className="food"
          style={{
            left: `${food.x * 50}px`,
            bottom: `${food.y * 50}px`
          }}
        />))}
      </div>
    </div>
  )
};

export default Display;
