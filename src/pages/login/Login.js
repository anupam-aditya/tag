import React, { useState, useContext } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { generateRandomString } from "../../services/authServices";
// import { BsFillEyeSlashFill } from "react-icons/bs";
import { useAuth } from "../../store/AuthContext";

const Login = (props) => {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	// const test = useAuth();
	// console.log("login : ", test);
	const handleFormSubmit = async (values) => {
		const email = document.querySelector("#user_email");
		const password = document.querySelector("#id_password");

		console.log("here");
		const data = {
			user_email: email.value,
			user_password: password.value,
		};
		props.login(data);
	};

	const passwordToggleHandler = (e) => {
		const password = document.querySelector("#id_password");
		if (e.target.className.includes("fa-eye-slash")) {
			e.target.className = e.target.className.replace("fa-eye-slash", "fa-eye");
			password.setAttribute("type", "text");
		} else {
			e.target.className = e.target.className.replace("fa-eye", "fa-eye-slash");
			password.setAttribute("type", "password");
		}
	};

	const forgotPasswordHandler = (e) => {
		if (e.target.className.includes("fa-eye-slash")) {
			console.log("comes here");
			e.target.className = e.target.className.replace("fa-eye-slash", "fa-eye");
		} else {
			e.target.className = e.target.className.replace("fa-eye", "fa-eye-slash");
		}
	};

	const initialValues = {
		userEmail: "Email address",
		userPassword: "Password",
	};

	const checkoutSchema = yup.object().shape({
		userEmail: yup.string().required("required"),
		userPassword: yup.string().required("required"),
	});

	return (
		<div className={classes["container"]}>
			<div className="login-heading-section ">
				<p className={classes["project-heading"]}>Volkano AI</p>
			</div>
			<div className={classes["login-main-section"]}>
				<div className={classes["login-heading-section"]}>
					<p className={classes["login-heading"]}>Login to Continue</p>
					<p className={classes["login-subheading"]}>
						Login with google or enter your details
					</p>
				</div>
				<div className={classes["login-form-section"]}>
					<Formik
						onSubmit={handleFormSubmit}
						initialValues={initialValues}
						validationSchema={checkoutSchema}
					>
						{({
							values,
							errors,
							touched,
							handleBlur,
							handleChange,
							handleSubmit,
						}) => (
							<form onSubmit={handleSubmit} className={classes["d-flex"]}>
								<label className={classes["inputLabel"]} htmlFor="user_email">
									Email address
								</label>
								<input
									name="userEmail"
									id="user_email"
									className={classes["input"] + " " + classes["email-input"]}
									type="email"
									placeholder="Enter email"
								/>
								<label className={classes["inputLabel"]} htmlFor="id_password">
									Password
								</label>
								<input
									name="userPassword"
									id="id_password"
									className={classes["input"]}
									type="password"
									placeholder="********"
								/>
								<i
									className={"far fa-eye-slash " + classes["password-toggle"]}
									id="togglePassword"
									onClick={passwordToggleHandler}
								></i>
								<p
									className={classes["forgot-password-text"]}
									onClick={forgotPasswordHandler}
								>
									Forgot Password?
								</p>
								<button className={classes["login-button"]} type="submit">
									Login
								</button>
							</form>
						)}
					</Formik>
				</div>
				<div className={classes["login-consent-section"]}>
					<p className={classes["login-consent-text"]}>
						By confirming your email, you agree to our{" "}
						<Link to="/terms" className={classes["login-consent-links"]}>
							Terms of Service
						</Link>{" "}
						and that you have read and understood our{" "}
						<Link to="/privacy" className={classes["login-consent-links"]}>
							Privacy Policy
						</Link>
						.
					</p>
					<p className={classes["register-text"]}>
						Don’t have an account.{" "}
						<Link to="/register" className={classes["register-link"]}>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
