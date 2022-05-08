import "./newUser.css";
import React, { useState } from "react";
import axios from "axios";

export default function NewUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [active, setActive] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newUser = {
      name,
      email,
      phone,
      address,
      gender,
      dateJoined,
      active,
    };

    axios
      .post("http://localhost:8070/user/Uadd", newUser)
      .then(() => {
        alert("user added");

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setGender("");
        setDateJoined("");
        setActive("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={sendData}>
        <div className="newUserItem">
          <label>User Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter User name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enther user Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter mobile no"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label for="male">Female</label>
          </div>
        </div>

        <div className="newUserItem">
          <label>Date Joined</label>
          <input
            type="date"
            id="dateJoined"
            placeholder="Enter the joined date"
            onChange={(e) => {
              setDateJoined(e.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Active status</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="Active"
              id="yes"
              value="Yes"
              onChange={(e) => {
                setActive(e.target.value);
              }}
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="Active"
              id="No"
              value="No"
              onChange={(e) => {
                setActive(e.target.value);
              }}
            />
            <label for="male">No</label>
          </div>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
