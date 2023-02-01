import React from "react";
import { GreetingText } from "./GreetingText";

export class GreetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: null };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      userInput: e.target[0].value,
    }));
    console.log(e);
  };

  render() {
    return (
      <React.Fragment>
        <form className="form" onSubmit={this.handleSubmit}>
          <input placeholder="Your name" />
          <button type="submit">Save</button>
        </form>
        <GreetingText name={this.state.userInput} />
      </React.Fragment>
    );
  }
}
