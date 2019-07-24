import React from 'react';
import Aux from '../../../hoc/Wrapper';
//import classes from './style.css';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>);

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total: #{props.totalPrice}</strong></p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCanceled} btnType='Danger'>CANCEL</Button>
      <Button clicked={props.purchaseContinued} btnType='Success'>PROCEED</Button>
    </Aux>
  );
};
export default orderSummary;