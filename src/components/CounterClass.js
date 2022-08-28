import React from "react";
class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.INCR = this.INCR.bind(this);
    this.DECR = this.DECR.bind(this);
  }
  INCR() {
    this.setState({ count: this.state.count + 1 });
  }
  DECR() {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  render() {
    return (
      <div className="card mt-3 p-3">
        <h3>Count: {this.state.count}</h3>
        <div className="d-flex column justify-content-around mt-2">
          <button className="btn btn-success" onClick={this.INCR}>
            INCR
          </button>
          <button className="btn btn-danger" onClick={this.DECR}>
            DECR
          </button>
        </div>
      </div>
    );
  }
}
export default CounterClass;
