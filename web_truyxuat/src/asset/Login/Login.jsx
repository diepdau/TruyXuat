import React,{ useState } from "react"
import './Login.css'
const initFormValue = {
	firstName: "",
	lastName: "",
	email:"",
	password:"",
	confirmPassword:"",
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

const validateForm = () => {
	const error = {};

	if(isEmptyValue(formValue.firstName)){
		error["firstName"] = "First Name is required";
	}
	
	if(isEmptyValue(formValue.firstName)){
		error["lastName"] = "Last Name is required";
	}

	if(isEmptyValue(formValue.firstName)){
		error["emailName"] = "Email Name is required";
	}else{
		if(!isEmailValid(formValue.email)){
			error["email"] = "Email is invalid";
		}
	}

	if(isEmptyValue(formValue.password)){
		error["password"] = "Password is required";
	}

	if(isEmptyValue(formValue.confirmPassword)){
		error["confirmPassword"] = "Confirm Password is required";
	}else if(formValue.confirmPassword !== formValue.password){
		error["confirmPassword"] = "Confirm Password not match";
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




const handleSubmit = (event) =>{
	event.preventDefault();// Khong reload lai form
	if(validateForm()){
		console.log("form value", formValue);
	}else
		{console.log("form invalidateForm")}
	
};

console.log(formError);

 return( <div className="register-page" > 
		<div className="register-form-container"> 
			<h1 className="title">Register account</h1>
			<form onSubmit = {handleSubmit}> 
				<div>
					<label htmlFor="first-name" className="form-label">
					FirstName
					</label>
					<input
						id="first-name"
						className="form-control"
						type="text"
						name="firstName"
						value = {formValue.firstName}
						onChange={handleChange}
					/>
					{formError.firstName && (
						<div className = "error-feedback"> {formError.firstName}</div>
					)}
				</div>
				<div className="mb-2">
					<label htmlFor="first-name" className="form-label">
					LastName
					</label>
					<input
						id="last-name"
						className="form-control"
						type="text"
						name="lastName"
						value = {formValue.lastName}
						onChange={handleChange}
					/>
					{formError.lastName && (
						<div className = "error-feedback"> {formError.lastName}</div>
					)}
				</div>
				<div className="mb-2">
					<label htmlFor="email" className="form-label">
					Email
					</label>
					<input
						id="email"
						className="form-control"
						type="text"
						name="email"
						value = {formValue.email}
						onChange={handleChange}
					/>
					{formError.email && (
						<div className = "error-feedback"> {formError.email}</div>
					)}
				</div>
				<div className="mb-2">
					<label htmlFor="password" className="form-label">
					Password
					</label>
					<input
						id="password"
						className="form-control"
						type="password"
						name="password"
						value = {formValue.password}
						onChange={handleChange}
					/>
					{formError.password && (
						<div className = "error-feedback"> {formError.password}</div>
					)}
				</div>
				<div className="mb-2">
					<label htmlFor="confirm-password" className="form-label">
					Confirm Password
					</label>
					<input
						id="confirm-password"
						className="form-control"
						type="password"
						name="confirmPassword"
						value = {formValue.confirmPassword}
						onChange={handleChange}
					/>
					{formError.confirmPassword && (
						<div className = "error-feedback"> {formError.confirmPassword}</div>
					)}
				</div>
				<button tyoe="submit" className="submit-btn">
				Register
				</button>

			</form>
		</div>

	</div>
);
}
