import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigat = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const Change = (e) => {
    const { name, value } = e.target;
    setData((Data) => ({ ...Data, [name]: value }));
  };
  console.log(data);
  const submited = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:4000/adduser", {
        name:data.name,
        email:data.email,
        phone:data.phone
      });

      navigat("/");
    } catch (error) {}
  };

  return (
    <div className="container">
      <NavLink to={"/"}>home</NavLink>
      <form className="row g-3 mt-5" onSubmit={submited}>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="inputEmail4"
            value={data.name}
            onChange={Change}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputPassword4"
            value={data.email}
            onChange={Change}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            className="form-control"
            id="inputAddress"
            placeholder="+910936215270"
            value={data.phone}
            onChange={Change}
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
