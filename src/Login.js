import React from "react";
import Register from "./Register.js";
import "./Login.css";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      validation: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["mobile"] = "";
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({ input: input });
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["mobile"]) {
      isValid = false;
      errors["mobile"] = "Please enter your mobile.";
    }

    if (typeof input["mobile"] !== "undefined") {
      const re = /^\d{10}$/;
      if (input["mobile"].length < 6 || !re.test(input["mobile"])) {
        isValid = false;
        errors["mobile"] = "Please enter valid Mobile No.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (typeof input["password"] !== "undefined") {
      if (input["password"].length < 6) {
        isValid = false;
        errors["password"] = "Please add at least 6 charachter.";
      }
    }

    this.setState({
      errors: errors,
    });

    return <Register />;
  }

  render() {
    return (
      <>
        <div className="login">
          <h1 className="header">Login</h1>
          <hr />
          <form onSubmit={this.handleSubmit} className="form">
            <table>
              <tr>
                <td>
                  <label for="mobile">Mobile No</label>
                </td>
                <td>
                  <div class="form-group">
                    <input
                      type="text"
                      name="mobile"
                      value={this.state.input.mobile}
                      onChange={this.handleChange}
                      placeholder="Enter Mobile No."
                      id="mobile"
                    />

                    <div className="text-danger">
                      {this.state.errors.mobile}
                    </div>
                  </div>
                </td>
              </tr>
              <br />

              <tr>
                <td>
                  <label for="password">Password</label>
                </td>
                <td>
                  <div class="form-group">
                    <input
                      type="password"
                      name="password"
                      value={this.state.input.password}
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Enter password"
                      id="password"
                    />

                    <div className="text-danger">
                      {this.state.errors.password}
                    </div>
                  </div>
                </td>
              </tr>
              <br />

              <tr>
                <td>
                  <center>
                    <button
                      type="submit"
                      value="Login"
                      className="btn btn-success"
                    >
                      Login
                    </button>
                  </center>
                </td>
              </tr>
              <br />
            </table>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
