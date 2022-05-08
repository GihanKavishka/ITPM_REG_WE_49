import axios from "axios";
import React, { Component } from "react";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
      gender: "",
      dateJoined: "",
      active: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.getSnapshotBeforeUpdate({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;

    const { name, email, phone, address, gender, dateJoined, active } =
      this.state;

    const data = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      gender: gender,
      dateJoined: dateJoined,
      active: active,
    };

    console.log(data);

    axios.put(`/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("User details updated successfully!");
        this.setState({
          name: "",
          email: "",
          phone: "",
          address: "",
          gender: "",
          dateJoined: "",
          active: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8070/get/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          name: res.data.user.name,
          email: res.data.user.email,
          phone: res.data.user.phone,
          address: res.data.user.address,
          gender: res.data.user.gender,
          dateJoined: res.data.user.dateJoined,
          active: res.data.user.active,
        });

        console.log(this.state.post);
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal"> Update USer Details</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>Name</lable>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>email</lable>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>phone</lable>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Enter mobile no"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>address</lable>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Enter address"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>gender</lable>
            <input
              type="text"
              className="form-control"
              name="gender"
              placeholder="Enter gender"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>Joined Date</lable>
            <input
              type="date"
              className="form-control"
              name="date"
              placeholder="Enter date"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>Active status</lable>
            <input
              type="text"
              className="form-control"
              name="active"
              placeholder="Enter active status"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>

          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Save
          </button>
        </form>
      </div>
    );
  }
}
