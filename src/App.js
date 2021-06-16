import "./App.css";
import React, { Component } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Counter from "./components/Counter";

class App extends Component {
  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <Header
          title="tanu"
          num={7}
          myObj={{ a: 5, b: 6 }}
          myArr={[1, 2, 3]}
          myFunc={this.add}
        ></Header>
        <Body text="first text" text2="second text" myFunc={this.add}></Body>
        <Counter initialCount={0}></Counter>
      </div>
    );
  }
}

export default App;
