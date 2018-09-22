import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card">
    <img alt={props.name} src={props.image} className="img-thumbnail" id={props.id} onClick={(e) =>  props.increment(props.id)} clicked={props.clicked ? 1 : 0} />
  </div>
);

export default GameCard;
