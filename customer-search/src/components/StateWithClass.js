import React, { Component } from "react";

export default class StateWithClass extends Component {
  constructor() {
    super();
    this.state = { counter: 0, msg: "Default Message" };
    //this.incr = this.incr.bind(this);
  }
  incr() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentDidUpdate() {
    document.title = "count " + this.state.counter;
  }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={() => this.incr()}>Count++</button>
      </div>
    );
  }
}
