import React, { Component } from 'react';

import Aux from '../../hoc/Wrapper';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  showSideDrawerHandler = () => {
    this.setState({showSideDrawer: true});
  }

  hideSideDrawerHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleCicked={this.showSideDrawerHandler} />
        <SideDrawer open={this.state.showSideDrawer}
          closed={this.hideSideDrawerHandler} />
        <main className={classes.content}>
          { this.props.children }
        </main>
      </Aux>
      );
  }
}
export default Layout;
