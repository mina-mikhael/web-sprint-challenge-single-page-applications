import React from "react";


const OrderSummary = (details) => {

  let toppingsArray = details.details.toppings;
console.log(details);
  return (
    <div className="orderSummary">
      <h2>Congrats! Pizza is on it's way!</h2>
      <h3> Order Summary for {details.details.customerName}</h3>
      <h4> Size: {details.details.size}</h4>
      <h4> Sauce: {details.details.sauce}</h4>
      <h4>Toppings: {toppingsArray}</h4>
      <h4>Special Requests: {details.details.special}</h4>
    </div>
  );
};

export default OrderSummary;
