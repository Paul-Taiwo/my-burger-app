import React from 'react';

import Aux from '../../hoc/Wrapper';
import classes from './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, sideDrawer, BackDrop</div>

    <main className={classes.content}>
      { props.children }
    </main>
  </Aux>
);

export default layout;
