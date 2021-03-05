import React from "react";
import "./Display.css";

class Display extends React.Component {
  render() {
    return (
      <>
        <div className="details">
          <center>
            <h1>Details</h1>
            <hr />
          </center>
          <table className="display">
            <tr className="tr">
              <th>Name</th>
              <th>Mobile No</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Skills</th>
              <th>Email</th>

              <th>DOB</th>
            </tr>
            <tr>
              <td>{this.props.name}</td>
              <td>{this.props.mobile}</td>
              <td>{this.props.gender}</td>
              <td>{this.props.role}</td>
              <td>{this.props.skills}</td>
              <td>{this.props.email}</td>

              <td>{this.props.dob}</td>
            </tr>
          </table>
          <center>
            <button className="button">Edit</button>
            <button className="button">Delete</button>
          </center>
        </div>
      </>
    );
  }
}

export default Display;
