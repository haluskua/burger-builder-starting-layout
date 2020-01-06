import React from "react";

import Auxillary from "../../hoc/Auxillary";
import classes from "../../components/Layout/Layout.css";
const layout = props => (
  <Auxillary>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxillary>
);

export default layout;
