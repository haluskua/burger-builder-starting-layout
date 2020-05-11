import React from "react";

import Auxillary from "../../hoc/Auxillary";
import classes from "../../components/Layout/Layout.css";
import Toolbar from "../Navigation/Toolbar";


const layout = props => (
  <Auxillary>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Auxillary>
);

export default layout;
