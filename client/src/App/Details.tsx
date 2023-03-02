import React from 'react';

function Details ({ selected }) {
  if (!selected || selected.dead) return (
    <div id="Details">
    </div>
  )
  return (
    <div id="Details">
      <h1>{selected.name}</h1>

      <p>{`Part of species: ${selected.speciesId}`}</p>
      <p>{`Food Eaten: ${selected.foodEaten}`}</p>
      <p>{`Sight Distance: ${selected.sight}`}</p>
      <p>{`Mutation Rate: ${selected.mutationRate}`}</p>
      <p>{`Movement Speed: ${selected.movementSpeed}`}</p>
      <p>{`Size: ${selected.size}`}</p>
      <p>{`Carnivorous: ${selected.type === 'carnivore'}`}</p>
      <p>{`Generations Survived: ${selected.generationsSurvived}`}</p>
      <p>{`Children Had: ${selected.children}`}</p>
    </div>
  )
};

export default Details;
