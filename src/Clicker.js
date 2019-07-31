import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.day = "Wednesday";
    // 1: bind in constructor
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        {/* 2: Use arrow function in render */}
        {/* <button onClick={() => this.handleClick()}>Click Me</button> */}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }

  // 3: use ES2017 property initializers
  handleClick() {
    console.log("click", this.day);
  }
}

export default Clicker;
