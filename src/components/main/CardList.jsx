import React from "react";
import Card from "./Card";

const CardList = ({ cardsInfo, onCountCart, path, onDelete }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 mx-2">
      {cardsInfo.map((card) => (
        <Card
          key={card.id}
          card={card}
          onCountCart={onCountCart}
          path={path}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CardList;
