import React, { useState } from "react";
import { CardComponent } from "../../shared/components/Card";
import { cardsData, ICardsData } from "../../config/Constants";

export const OrderList = () => {
  const [cards] = useState(cardsData);

  return (
    <div>
      {cards.map((card: ICardsData, index) => (
        <CardComponent
          key={index}
          description={card.description}
          viewType={card.viewType}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default OrderList;
