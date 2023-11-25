import React from 'react';

function Card(props) {
  return (
    <div
      id={props.id}
      className={`w-56 h-80 bg-sky-100 rounded-2xl ${props.styles}`}
    >
      {props.children}
    </div>
  );
}

export default Card;
