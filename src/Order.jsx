import React from "react";


const OrderSummary = (details) => {

  let toppingsArray = details.details.toppings;

  return (
    <div className="orderSummary">
      <h3> Order Summary for {details.details.customerName}</h3>
      <h4> Size: {details.details.size}</h4>
      <h4> Sauce: {details.details.sauce}</h4>
      <div>
        <h4>
          Toppings:
          {toppingsArray.map((item, idx) => {
            return <span key={idx}> {item},</span>;
          })}
        </h4>
      </div>
      <h4>Special Requests: {details.details.special}</h4>
    </div>
  );
};

export default OrderSummary;
