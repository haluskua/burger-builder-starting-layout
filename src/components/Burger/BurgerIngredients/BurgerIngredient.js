import React, { Component } from "react";
import classes from './BurgerIngredient';
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div classes={classes.Seeds1}></div>
            <div classes={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}></div>;
        break;
      case "meat":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "meat":
        ingredient = <div className={classes.Bacon}></div>;
        break;
      case "meat":
        ingredient = <div className={classes.Salad}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

//proptype Validation

BurgerIngredient.PropTypes = {
    type: ProptTypes.string.isRequired
}

export default BurgerIngredient;
