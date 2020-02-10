import React, { useState } from "react";
import "./styles.css";
import "./demo.css";
import { Input } from "antd";
import { Button } from "antd";
import UserInput from "./InputField/UserInput";

import Score from "./circle/Score";
class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, value_circle: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ value_circle: this.state.value });
  }

  render() {
    return (
      <div>
        <Score number={this.state.value_circle} />
        <label>
          Name:
          <input type="number" onChange={this.handleChange} />
        </label>
        <button onClick={this.handleSubmit} type="primary">
          Primary
        </button>
        {/* <input onSubmit={this.handleSubmit} type="submit" value="Submit" /> */}
      </div>
    );
  }
}
export default App3;
