import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
//statefull component
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
      backon: 0,
      cheese: 0,
      meat: 0, 
    }
  }
  render() {
    return (
      <Auxillary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
