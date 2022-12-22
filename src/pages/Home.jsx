import React, { Component } from "react";
import Counter from "../componants/Count/Index";

const counters = [
  { id: 0, count: 0, x: 1 },
  { id: 1, count: 0, x: 2 },
  { id: 2, count: 0, x: 3 },
  { id: 3, count: 0, x: 4 },
];

export default class Counters extends Component {
  state = {
    counters, total: 0,
  };

  changeTo = (type, id, x) => {
    this.setState((prevState) => {
      if (type === "increment") {
        return { 
          total: prevState.total + x 
        };
      } else if (
        type === "decrement" && prevState.total > 0 &&
        this.state.counters[id].count >= x
      ) {
        return {
           total: prevState.total - x
           };
      }
    });
  };
  decrement = (id, x = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) =>
          item.id === id && item.count >= item.x
            ? { ...item, count: item.count - +x }
            : item
        ),
      };
    });
    this.changeTo("decrement", id, x);
  };
  increment = (id, x = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) =>
          item.id === id ? { ...item, count: item.count + +x } : item
        ),
      };
    });
    this.changeTo("increment", id, x);
  };
  render() {
    return (
      <div>
        {this.state.counters.map((item) => {
          return (
            <Counter
              key={item.id}
              {...item}
              increment={this.increment}
              decrement={this.decrement}
            />
          );
        })}
        <div className="total">{this.state.total}</div>
      </div>
    );
  }
}
