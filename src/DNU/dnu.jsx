import { Component } from "react";
import { React } from "react";

class Card extends Component {
  constructor() {
    super();
    this.state = { count: 1 };
  }
  onClickHandler = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("sync");
    });
  };
  render() {
    console.log(this.state.count);
    return (
      <div>
        Card
        <button onClick={this.onClickHandler}>click me to increment</button>
      </div>
    );
  }
}

export default Card;
