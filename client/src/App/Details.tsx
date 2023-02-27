import React from 'react';

function Details ({ selected }) {
  if (!selected) return (
    <div id="Details">
    </div>
  )
  return (
    <div id="Details">
      <h2>{selected.name}</h2>
    </div>
  )
};

export default Details;
