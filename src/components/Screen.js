import React, { Component } from "react";
import App from "./App";
export default class Screen extends Component {
  constructor() {
    super();
    this.state = {
      currentScreen: "Html",
    };
  }
  togglePages = (page) => {
    this.setState({
      currentScreen: page,
    });
  };
  render() {
    return (
      <div>
        <App
          currentScreen={this.state.currentScreen}
          togglePages={this.togglePages}
        />
      </div>
    );
  }
}
