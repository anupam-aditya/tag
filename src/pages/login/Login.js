import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import {Link, useNavigate} from "react-router-dom";
import classes from "./Login.module.css";
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { generateRandomString } from "../../services/authServices";
import { BsFillEyeSlashFill } from "react-icons/bs";

const Login = (props) => {
	const isNonMobile = useMediaQuery("(min-width:600px)");

	const handleFormSubmit = async (values) => {
		console.log("here");
		// values.userPassword =
		// 	values.userPassword.slice(0, 4) +
		// 	generateRandomString(8) +
		// 	values.userPassword.slice(4, values.userPassword.length);

		// const user_data = {
		// 	user_email: values.userEmail,
		// 	user_password: values.userPassword,
		// };

		// try {
		// 	const response = await fetch(`http://127.0.0.1:5000/api/v1/login`, {
		// 		method: "POST",
		// 		mode: "cors",
		// 		credentials: "same-origin",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify(user_data),
		// 	});
		// 	const data = await response.json();
		// 	console.log("data in front end ", data);
		// } catch (error) {
		// 	console.error("Error fetching data:", error);
		// }
	};

	const passwordToggleHandler = (e) => {
		if (e.target.className.includes("fa-eye-slash")) {
			console.log("comes here");
			e.target.className = e.target.className.replace("fa-eye-slash", "fa-eye");
		} else {
			e.target.className = e.target.className.replace("fa-eye", "fa-eye-slash");
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
								<label className={classes["inputLabel"]}>Email address</label>
								<input
									className={classes["input"] + " " + classes["email-input"]}
									type="email"
									placeholder="Enter email"
								/>
								<label className={classes["inputLabel"]}>Password</label>
								<input
									className={classes["input"]}
									type="password"
									placeholder="Enter password"
								/>
								<i
									className={"far fa-eye-slash " + classes["password-toggle"]}
									id="togglePassword"
									onClick={passwordToggleHandler}
								></i>
							</form>
						)}
					</Formik>
					<p
						className={classes["forgot-password-text"]}
						onClick={forgotPasswordHandler}
					>
						Forgot Password?
					</p>
					<div className={classes["button-section"]}>
						<button className={classes["login-button"]} type="submit">
							Login
						</button>
					</div>
				</div>
				<div className={classes["login-consent-section"]}>
					<p className={classes["login-consent-text"]}>
						By confirming your email, you agree to our <Link to="/terms" className={classes["login-consent-links"]}>Terms of Service</Link> and that you have read and understood our <Link to="/privacy" className={classes["login-consent-links"]}>Privacy Policy</Link>.
					</p>
					<p className={classes["register-text"]}>Don’t have an account. <Link to="/register" className={classes["register-link"]}>Sign Up</Link></p>
				</div>
			</div>
		</div>
	);
};

export default Login;

{
	/* <Box
									display="grid"
									gap="30px"
									gridTemplateColumns="repeat(4, minmax(0, 1fr))"
									sx={{
										"& > div": {
											gridColumn: isNonMobile ? undefined : "span 4",
										},
										background: "inherit",
									}}
								>
									<TextField
										fullWidth
										type="text"
										label="Email address"
										color="primary"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.userEmail}
										name="userEmail"
										error={!!touched.userEmail && !!errors.userEmail}
										helperText={touched.userEmail && errors.userEmail}
										sx={{
											gridColumn: "span 4",
											background: "inherit",
										}}
										inputProps={{
											sx: {
												color: "#ffffff",
											},
										}}
									/>
									<TextField
										fullWidth
										variant="filled"
										type="password"
										label="Password"
										color="primary"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.userPassword}
										name="userPassword"
										error={!!touched.userPassword && !!errors.userPassword}
										helperText={touched.userPassword && errors.userPassword}
										sx={{
											gridColumn: "span 4",
											background: "inherit",
										}}
										inputProps={{
											sx: {
												color: "#ffffff",
											},
										}}
									/>
								</Box>
								<Box display="flex" justifyContent="end" mt="20px">
									<Button type="submit" color="secondary" variant="contained">
										Get
									</Button>
								</Box> */
}
