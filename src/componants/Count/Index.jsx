
import "./index.css";
import React, { Component } from "react";
export default class Counter extends Component {
  render() {
    return (
      <div className="div1">
        <div className="div2">{this.props.count}</div>
        <div className="increment" onClick={() => this.props.increment(this.props.id, this.props.steps)}>+</div>
        <div className="decrement"onClick={() => this.props.decrement(this.props.id, this.props.steps)}>-</div>
      </div>
    );
  }
}