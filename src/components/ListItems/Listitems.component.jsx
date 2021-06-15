import React from "react";
import { itemsCollection } from "../../data/itemsCollection";
import ItemCard from "../ItemCard/ItemCard.component";

export default function Listitems() {
  return (
    <div>
      {itemsCollection.map((itemProps) => (
        <ItemCard {...itemProps} />
      ))}
    </div>
  );
}
