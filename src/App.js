import React, { Component } from "react";
import "./App.css";
import Counters from "./components/CounterListner";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    count: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  increamentHandler = (counters) => {
    const count = [...this.state.count];
    const index = count.indexOf(counters);
    count[index] = { ...counters };
    count[index].value++;
    this.setState({ count });
  };

  deleteHandler = (countID) => {
    const count = this.state.count.filter((c) => c.id !== countID);
    this.setState({ count });
  };
  resetHandler = (resetting) => {
    const count = this.state.count.map((r) => {
      r.value = 0;
      return r;
    });
    this.setState({ count });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          <Counters
            count={this.state.count}
            onReset={this.resetHandler}
            onDelete={this.deleteHandler}
            onIncreament={this.increamentHandler}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
