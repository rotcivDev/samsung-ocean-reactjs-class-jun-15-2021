import React from "react";

export default function ItemCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="" />
    </div>
  );
}
