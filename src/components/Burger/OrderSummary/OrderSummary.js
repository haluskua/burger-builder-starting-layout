import React from "react";
import Auxillary from "../../../hoc/Auxillary";
import Button from '../../UI/Button/Button';



const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransfrom: "capitalize" }}>{igKey}</span>:{props.ingredients[igKey]}
      </li> );
  } );

  return (
    <Auxillary>
      <h3>Your Order</h3>
      <p>A deliscious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Auxillary>
  );
};

export default OrderSummary;
