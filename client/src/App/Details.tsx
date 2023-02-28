import React from 'react';

function Details ({ selected }) {
  if (!selected) return (
    <div id="Details">
    </div>
  )
  return (
    <div id="Details">
      <h2>{selected.name}</h2>

      <p>{`Food Eaten: ${selected.foodEaten}`}</p>
      <p>{`Sight Distance: ${selected.sight}`}</p>
      <p>{`Mutation Rate: ${selected.mutationRate}`}</p>
      <p>{`Movement Speed: ${selected.movementSpeed}`}</p>
    </div>
  )
};

export default Details;
