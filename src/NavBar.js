import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return <nav> Navigation: {this.props.children}</nav>;
  }
}

export default NavBar;
