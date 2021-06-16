import logo from "../logo.svg";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <h1 className="App-title">hi {this.props.title}</h1>
        {/* <div>{this.props.myFunc(2, 2)}</div> */}
      </header>
    );
  }
}

export default Header;
