import React, { useState } from "react";
import {  Link } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from '../Img/Desktop/logo.png'

const initFormValue = {
  email: "",
  password: "",
};

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};

const isEmailValid = (email) => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
};

export default function RegisterPage() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const error = {};

    if (isEmptyValue(formValue.email)) {
      error["email"] = "Email is required";
    } else {
      if (!isEmailValid(formValue.email)) {
        error["email"] = "Email is invalid";
      }
    }

    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
    }

    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("form value", formValue);
    } else {
      console.log("form invalid");
    }
  };

  return (
    <div className="register-page">
      
      <div className="register-form-container">
      <div className="branding">
        <img src={logo} alt="Logo" />
        <h1>LarFarm</h1>
      </div>
        <h1 className="title">Đăng nhập</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email hoặc số điện thoại
            </label>
            <input
              id="email"
              className="form-control"
              type="text"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
            {formError.email && (
              <div className="error-feedback"> {formError.email}</div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-container">
              <input
                id="password"
                className="form-control"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formValue.password}
                onChange={handleChange}
              />
              <div className="toggle-password" onClick={toggleShowPassword}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </div>
            </div>
            {formError.password && (
              <div className="error-feedback"> {formError.password}</div>
            )}
			<Link to="/forgot-password" className="forgot-password">Quên mật khẩu?</Link>
          </div>
          <button type="submit" className="submit-btn">
           <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Đăng nhập</Link> 
          </button>
		  <div className="or-divider">
				<div className="or-line"></div>
				<div className="or-text">HOẶC</div>
				<div className="or-line"></div>
			</div>

			<div className="social-icons">
				<div className="icon facebook">
					<FontAwesomeIcon icon={faFacebookF} />
				</div>
				<div className="icon google">
					<FontAwesomeIcon icon={faGoogle} />
				</div>
			</div>
			
			<Link to="/create-account" className="create-account"><p>Bạn chưa có tài khoản. </p><span> Đăng kí?</span> </Link>
        </form>
      </div>
    </div>
  );
}
