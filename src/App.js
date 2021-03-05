import React from "react";
import Login from "./Login.js";
import Register from "./Register.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isclicked: false,
    };
  }
  onClick = (event) => {
    this.setState({
      isclicked: true,
    });
  };
  render() {
    return (
      <>
        {this.state.isclicked ? (
          <Register {...this.state} />
        ) : (
          <div className="App">
            <center>
              <Login />
              <p className="text">Don't have an account? </p>
              <button className="button" onClick={this.onClick}>
                Sign Up
              </button>
            </center>
          </div>
        )}
      </>
    );
  }
}

export default App;
