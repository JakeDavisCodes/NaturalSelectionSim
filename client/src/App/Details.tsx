import React from 'react';

function Details ({ selected }) {
  if (!selected) return (
    <div id="Details">
    </div>
  )
  return (
    <div id="Details">
      <p>{selected.name}</p>
    </div>
  )
};

export default Details;
