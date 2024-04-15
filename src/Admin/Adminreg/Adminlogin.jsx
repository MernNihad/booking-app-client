import React, { useState } from "react";
// import './Login.css'
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import axios from "axios";
import { errorToast, successToast } from "../../Components/Toast/toast";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  let HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:8080/api/v1/admin/login",
        data
      );
      successToast(response.data.message);
      console.log(response.data, "response");
      localStorage.setItem('token',response.data.data.token)
      localStorage.setItem("admin-id",response?.data?.data?.user?._id)
         navigate('/admin')
    } catch (error) {
      console.log(error);
      errorToast(error.response.data.message || error.message || 'error');
    }
  };

  let HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  return (
    <section>
      <div className="reg">
        <form onSubmit={HandleSubmit} className="log1">
          <b>
            <span className="regh1">
              <i>Login Here..</i>
            </span>
          </b>
          <br />
          <br />
          <div>
            <TextField
              className="regbox"
              onChange={HandleChange}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
            />
            <br />
            <br />
            <TextField
              className="regbox"
              onChange={HandleChange}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
            />
            <br />
            <br />
            <button className="regbtn">
              <b>Login</b>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
