import React from "react";

const OrderSummary = (details) => {
  const { customerName, size, sauce, toppings, special } = details;
  if (!details) {
    return <h3> Working on your Order !</h3>;
  }

  return (
    <div className="orderSummary">
      <h2>{details.customerName}'s Order Summary</h2>
      <h3> Size: {details.size}</h3>
      <h3> Sauce: {details.sauce}</h3>
      <h3> Toppings: {details.toppings}</h3>
      <h3>Special Requests: {details.special}</h3>
    </div>
  );
};

export default OrderSummary;
