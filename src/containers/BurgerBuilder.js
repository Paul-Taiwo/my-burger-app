import React, { Component } from 'react';

import Aux from '../hoc/Wrapper';
import Burger  from '../components/Burger/Burger';
import BurgerControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 50,
  bacon: 100,
  meat: 150,
  cheese: 200,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 100,
    purchaseable: false,
    purchasing: false,
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKeys => {
        return ingredients[igKeys];
      })
      .reduce((sum, el) => sum + el, 0);
      this.setState({purchaseable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    let updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = (oldPrice - priceDeduction);
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCanceledHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseCantinueHandler = () => {
    alert('You continued');
    this.purchaseCanceledHandler()
  }

  render() {
    let disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredient={this.state.ingredients}/>
        <BurgerControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          ordered={this.purchaseHandler}
          purchaseable= {this.state.purchaseable}
          price={this.state.totalPrice} />

          <Modal show={this.state.purchasing}
                  modalClosed={this.purchaseCanceledHandler}>
            <OrderSummary
              purchaseCanceled={this.purchaseCanceledHandler}
              purchaseContinued={this.purchaseCantinueHandler}
              totalPrice={this.state.totalPrice}
              ingredients={this.state.ingredients}/>
          </Modal>
      </Aux>
    );
  }
}

export default BurgerBuilder;