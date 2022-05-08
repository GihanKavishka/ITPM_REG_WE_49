import React, { Component } from "react";
import axios from "axios";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    this.retriveUsers();
  }

  retriveUsers() {
    axios.get("http://localhost:8070/user/").then((res) => {
      if (res.data.success) {
        this.setState({
          user: res.data.existingusers,
        });
        console.log(this.state.user);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/delete/${id}`).then((res) => {
      alert("deleted successfully");
      this.retriveUsers();
    });
  };

  render() {
    return (
      <div>
        <h1 className="newUserTitle">ALL USERS</h1>
        &nbsp;&nbsp;
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Joined date</th>
              <th scope="col">Active status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/get/${user._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {user.name}
                  </a>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.gender}</td>
                <td>{user.dateJoined}</td>
                <td>{user.active}</td>
                <td>
                  <a className="btn btn-warning" href={`/update/${user._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    ocClick={() => this.onDelete(user._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
