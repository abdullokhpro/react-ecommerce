import React, { useEffect } from "react";
import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSignInMutation } from "../../context/api/userApi";
import { useGetValue } from "../../hooks/useGetValue";
import { setToken } from "../../context/slices/authSlice";

const initialState = {
  username: "johnd",
  password: "m38rmF$",
};

const Login = () => {
  const { formData, handleChange } = useGetValue(initialState);
  const [signIn, { data, isError, isLoading, isSuccess, error }] =
    useSignInMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("x-auth-token", data.token);
      navigate("/admin");
    }
    if (isError) {
      alert(error.data.message);
    }
  }, [isSuccess, isError]);
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleLogin} className="login__form" action="">
          <input
            className="login__form__input"
            type="text"
            placeholder="Username"
            required
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            className="login__form__input"
            type="password"
            placeholder="Password"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="login__form__btn">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
