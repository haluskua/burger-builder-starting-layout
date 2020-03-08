import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
//statefull component

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meate: 1.3,
  baconn: 1.7

}
class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  state = {
    ingredients: {
      //adding Key-value pairs
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0, 
    },
    totalPrice: 4
  }
  addIngredientHandeler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    
  }
  render() {
    return (
      <Auxillary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
        indgredientAdded={this.addIngredientHandeler} />
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
