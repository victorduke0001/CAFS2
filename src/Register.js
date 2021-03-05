import React from "react";
import Display from "./Display.js";
import "./Register.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mobile: "",
      gender: "",
      role: "",
      skills: "",
      email: "",
      password: "",
      dob: "",
      isFormSubmitted: false,
    };
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handlesubmit = (event) => {
    event.preventDefault();
    this.setState({
      isFormSubmitted: true,
    });
  };
  handleCheckboxChange = (event) =>
    this.setState({ [event.target.checked]: event.target.value });
  render() {
    return (
      <>
        {this.state.isFormSubmitted ? (
          <Display {...this.state} />
        ) : (
          <div className="Register">
            <center>
              <h1 className="header">Register</h1>
              <hr />
              <form className="form" onSubmit={this.handlesubmit}>
                <table>
                  <tr>
                    <td>
                      <label>Name</label>
                    </td>
                    <td>
                      <label> </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <label>Mobile No</label>
                    </td>
                    <td>
                      <label></label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.onChange}
                      />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <label>Gender</label>
                    </td>
                    <td>
                      <label></label>
                    </td>
                    <td>
                      <input
                        type="radio"
                        name="gender"
                        value={this.state.gender}
                        handleCheckboxChange={this.handleCheckboxChange}
                      />
                      <label>Male</label>
                      <input
                        type="radio"
                        name="gender"
                        value={this.state.gender}
                        handleCheckboxChange={this.handleCheckboxChange}
                      />
                      <label>Female</label>
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <label>Role</label>
                    </td>
                    <td>
                      <label></label>
                    </td>
                    <td>
                      <select>
                        <option
                          name="role"
                          id="role"
                          value={this.state.role}
                          handleCheckboxChange={this.handleCheckboxChange}
                        >
                          Admin
                        </option>
                        <option
                          name="role"
                          id="role"
                          value={this.state.role}
                          handleCheckboxChange={this.handleCheckboxChange}
                        >
                          User
                        </option>
                      </select>
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <label>Skills</label>
                    </td>
                    <td>
                      <label></label>
                    </td>
                    <td>
                      <form>
                        <input
                          type="checkbox"
                          id="skills"
                          name="skills"
                          value={this.state.skills}
                          handleCheckboxChange={this.handleCheckboxChange}
                        />
                        <label>React</label>
                        <br />
                        <input
                          type="checkbox"
                          id="skills"
                          name="skills"
                          value={this.state.skills}
                          handleCheckboxChange={this.handleCheckboxChange}
                        />
                        <label>MangoDB</label>
                        <br />
                        <input
                          type="checkbox"
                          id="skills"
                          name="skills"
                          value={this.state.skills}
                          handleCheckboxChange={this.handleCheckboxChange}
                        />
                        <label>Node</label>
                        <br />
                      </form>
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <label>Email ID</label>
                    </td>
                    <td>
                      <label></label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <label>Password</label>
                    </td>
                    <td>
                      <label></label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <label>DOB</label>
                    </td>
                    <td>
                      <label> </label>
                    </td>
                    <td>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={this.state.dob}
                        onChange={this.onChange}
                      />
                    </td>
                  </tr>
                  <br />
                </table>
                <tr>
                  <td>
                    <center>
                      <button className="button" onSubmit={this.handlesubmit}>
                        Submit
                      </button>
                    </center>
                  </td>
                </tr>
              </form>
            </center>
          </div>
        )}
      </>
    );
  }
}

export default Register;
