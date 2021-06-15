import React from "react";
import "./ItemCard.styles.scss";

export default function ItemCard(props) {
  return (
    <div className="item-card">
      <h2>{props.name}</h2>
      <img src={props.img} alt="" />
    </div>
  );
}
