import React from 'react';

function Place(props) {
  const coverImg = require(`../images/${props.coverImg}`);
  return (
    <div
      style={{
        backgroundImage: `url(${coverImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: '1px solid black'
      }}
      className="my-component-class"
    >
      <div className="block">
        <h1 className="title">{props.title}</h1>
        <h2 className="country">{props.country}</h2>
      </div>
      <h1 className="date">{props.date}</h1>
    </div>
  );
}

export default Place;
