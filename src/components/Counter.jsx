import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {

  render() {
    return (
      <div>
        <span className="badge text-bg-info">
          {this.props.count.value === 0 ? "ZERO" : this.props.count.value}
        </span>
        <div onClick={()=>this.props.onIncreament(this.props.count)} className="btn m-3  btn-primary">
          Increament
        </div>
        <div
          onClick={() => this.props.onDelete(this.props.count.id)}
          className="btn gap-3 btn-danger"
        >
          Delete
        </div>
      </div>
    );
  }
}

export default Counter;
