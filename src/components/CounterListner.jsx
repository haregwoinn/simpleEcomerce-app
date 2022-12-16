import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary">Reset</button>
        {this.props.count.map((counter) => (
          <Counter
            onDelete={this.props.onDelete}
            key={counter.id}
            count={counter}
            onIncreament={this.props.onIncreament}
          >
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
