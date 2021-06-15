import React from "react";
import { itemsCollection } from "../../data/itemsCollection";
import ItemCard from "../ItemCard/ItemCard.component";
import "./ListItems.styles.scss";

export default function Listitems() {
  return (
    <div className="items-list">
      {itemsCollection.map((itemProps) => (
        <ItemCard {...itemProps} />
      ))}
    </div>
  );
}
