import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";


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
      salad: 1,
      backon: 1,
      cheese: 2,
      meat: 2, 
    }
  }
  render() {
    return (
      <Auxillary>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
