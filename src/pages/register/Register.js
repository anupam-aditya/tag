import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import classes from "./Register.module.css";
import register from "../../assets/images/registration_image.png";

const Register = (props) => {
	const submitHandler = async (values) => {
		console.log("comes here");
		console.log(values);
		const data = await props.register(values);
		console.log(data);
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			password: "",
			email: "",
			checkbox: false,
		},
		onSubmit: submitHandler,
	});
	return (
		<div className={classes["container"] + " " + classes["d-flex"]}>
			<div className={classes["register-form-section"]}>
				<div className={classes["register-form-heading-section"]}>
					<p className={classes["register-form-heading"]}>Volkano AI</p>
				</div>
				<div className={classes["register-form"]}>
					<div className={classes["register-form-heading-section"]}>
						<p className={classes["register-heading"]}>Sign up to Continue</p>
						<p className={classes["register-subheading"]}>
							Sign up with google or enter your details
						</p>
					</div>
					<div className={classes["register-form-input-section"]}>
						<form
							onSubmit={formik.handleSubmit}
							className={classes["register-inputs"]}
						>
							<label className={classes["inputLabel"]} htmlFor="name">
								Full Name
							</label>
							<input
								className={classes["input"]}
								id="name"
								name="name"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.name}
								placeholder="Enter full name"
							/>

							<label className={classes["inputLabel"]} htmlFor="email">
								Email address
							</label>
							<input
								className={classes["input"]}
								id="email"
								name="email"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.email}
								placeholder="Enter email"
							/>

							<label className={classes["inputLabel"]} htmlFor="password">
								Password
							</label>
							<input
								className={classes["input"]}
								id="password"
								name="password"
								type="password"
								onChange={formik.handleChange}
								value={formik.values.password}
								placeholder="********"
							/>
							<div
								className={classes["d-flex"]}
								style={{ alignItems: "center", gap: "4px" }}
							>
								<input
									className={classes["inputCheckbox"]}
									type="checkbox"
									id="checkbox"
									name="checkbox"
									onChange={formik.handleChange}
									value={formik.values.checkbox}
								/>
								<label
									className={
										classes["inputLabel"] + " " + classes["inputCheckboxLabel"]
									}
									htmlFor="checkbox"
								>
									Remember Me
								</label>
							</div>
							<div className={classes["register-button-section"]}>
								<button className={classes["register-button"]} type="submit">
									Sign Up
								</button>
							</div>
						</form>
					</div>
					<div className={classes["register-form-consent-section"]}>
						<p className={classes["register-consent-text"]}>
							By confirming your email, you agree to our{" "}
							<Link to="/terms" className={classes["register-consent-link"]}>
								Terms of Service
							</Link>{" "}
							and that you have read and understood our{" "}
							<Link to="/privacy" className={classes["register-consent-link"]}>
								Privacy Policy
							</Link>
							.
						</p>
						<p className={classes["login-text"]}>
							Already have an account.{" "}
							<Link to="/register" className={classes["login-link"]}>
								Log In
							</Link>
						</p>
					</div>
				</div>
			</div>
			<div className={classes["register-image-section"]}>
				<img className={classes["register-image"]} src={register}></img>
			</div>
		</div>
	);
};

export default Register;
