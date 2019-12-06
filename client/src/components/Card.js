import React from "react";

const Card = ({ id, name, country }) => {
  return (
    <div className="card" key={id}>
      <h1>{name}</h1>
      <p>{country}</p>
    </div>
  );
};

export default Card;
