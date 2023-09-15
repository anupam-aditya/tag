import React from "react";
import { useFormik } from "formik";
import classes from "./Settings.module.css";
import Topbar from "../../../components/Topbar";
import { MdOutlineContentCopy } from "react-icons/md";
import profile from "../../../assets/images/profile.jpg";

const Form = (props) => {
	const copyHandler = () => {
		navigator.clipboard.writeText(
			document.querySelector("#affiliate-text").textContent
		);
	};
	const submitHandler = async (values) => {
		console.log("comes here");
		console.log(values);
		const data = await props.update(values);
		console.log(data);
	};
	const formik = useFormik({
		initialValues: {
			first_name: "",
			last_name: "",
			email: "",
			address: "",
			country: "",
			state: "",
			city: "",
			pincode: "",
			checkbox: false,
		},
		onSubmit: submitHandler,
	});
	const cancelDataHandler = () => {
		formik.setValues({
			first_name: "",
			last_name: "",
			email: "",
			address: "",
			country: "",
			state: "",
			city: "",
			pincode: "",
			checkbox: false,
		});
	};
	return (
		<form className={classes["personal-account-info"]}>
			<div className={classes["personal-info-section"]}>
				<p className={classes["personal-info-heading-text"]}>Account</p>
				<p className={classes["personal-info-section-text"]}>
					This information will be displayed publicly so be careful what you
					share.
				</p>
				<div className={classes["personal-info-input-section"]}>
					<label
						className={classes["inputLabel"] + " " + classes["regular-text"]}
						htmlFor="first_name"
					>
						First Name
					</label>
					<input
						className={classes["input"] + " " + classes["regular-text"]}
						id="first_name"
						name="first_name"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.first_name}
						placeholder="Enter first name"
					/>

					<label
						className={
							classes["inputLabel"] +
							" " +
							classes["inputMargin"] +
							" " +
							classes["regular-text"]
						}
						htmlFor="last_name"
					>
						Last Name
					</label>
					<input
						className={classes["input"] + " " + classes["regular-text"]}
						id="last_name"
						name="last_name"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.last_name}
						placeholder="Enter last name"
					/>
					<p
						className={
							classes["inputLabel"] +
							" " +
							classes["inputMargin"] +
							" " +
							classes["regular-text"]
						}
					>
						Affiliate Link
					</p>
					<p
						id="affiliate-text"
						className={
							classes["input"] +
							" " +
							classes["affiliate-text"] +
							" " +
							classes["regular-text"]
						}
					>
						<span>https://vlkn.ai?ref_code='xzx23h'</span>
						<MdOutlineContentCopy
							className={classes["copy-button"]}
							onClick={copyHandler}
						/>
					</p>
				</div>
			</div>
			<div className={classes["personal-info-section"]}>
				<p className={classes["personal-info-heading-text"]}>
					Company Information
				</p>
				<p className={classes["personal-info-section-text"]}>
					This information will be displayed publicly so be careful what you
					share.
				</p>
				<div className={classes["personal-info-input-section"]}>
					<label
						className={classes["inputLabel"] + " " + classes["regular-text"]}
						htmlFor="first_name"
					>
						Company URL
					</label>
					<p
						className={
							classes["input"] +
							" " +
							classes["company-url"] +
							" " +
							classes["regular-text"]
						}
					>
						deyga.in
					</p>

					<label
						className={
							classes["inputLabel"] +
							" " +
							classes["inputMargin"] +
							" " +
							classes["regular-text"]
						}
						htmlFor="address"
					>
						Address
					</label>
					<input
						className={classes["input"] + " " + classes["regular-text"]}
						id="address"
						name="address"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.address}
						placeholder="Enter Address"
					/>
					<label
						className={
							classes["inputLabel"] +
							" " +
							classes["inputMargin"] +
							" " +
							classes["regular-text"]
						}
						htmlFor="country"
					>
						Country
					</label>
					<input
						className={classes["input"] + " " + classes["regular-text"]}
						id="country"
						name="country"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.country}
						placeholder="Country"
					/>
					<label
						className={
							classes["inputLabel"] +
							" " +
							classes["inputMargin"] +
							" " +
							classes["regular-text"]
						}
						htmlFor="state"
					>
						State
					</label>
					<input
						className={classes["input"] + " " + classes["regular-text"]}
						id="state"
						name="state"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.state}
						placeholder="State"
					/>
					<label
						className={
							classes["inputLabel"] +
							" " +
							classes["inputMargin"] +
							" " +
							classes["regular-text"]
						}
						htmlFor="city"
					>
						City
					</label>
					<input
						className={classes["input"] + " " + classes["regular-text"]}
						id="city"
						name="city"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.city}
						placeholder="City"
					/>
					<label
						className={
							classes["inputLabel"] +
							" " +
							classes["inputMargin"] +
							" " +
							classes["regular-text"]
						}
						htmlFor="pincode"
					>
						Pincode
					</label>
					<input
						className={classes["input"] + " " + classes["regular-text"]}
						id="pincode"
						name="pincode"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.pincode}
						placeholder="Pincode"
					/>
				</div>
				<div className={classes["forms-button-section"]}>
					<button
						className={classes["image-remove-button"]}
						onClick={cancelDataHandler}
					>
						Cancel
					</button>
					<button className={classes["image-add-button"]} type="submit">
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

const Settings = (props) => {
	const submitHandler = async (values) => {};
	const formikCompany = useFormik({
		initialValues: {
			first_name: "",
			last_name: "",
			email: "",
			checkbox: false,
		},
		onSubmit: submitHandler,
	});
	return (
		<div className={classes["container"]}>
			<Topbar />
			<div className={classes["settings-container"]}>
				<p className={classes["section-heading"]}>Settings</p>
				<div className={classes["settings-main-section"]}>
					<Form></Form>
					<div className={classes["company-info-display-section"]}>
						<div className={classes["owner-info-section"]}>
							<div className={classes["owner-info-heading-section"]}>
								<p className={classes["owner-info-heading-text"]}>Profile</p>
								<p className={classes["owner-info-section-text"]}>
									This information will be displayed publicly so be careful what
									you share.
								</p>
							</div>
							<div className={classes["owner-info-heading-section"]}>
								<img className={classes["owner-image"]} src={profile} />
								<button className={classes["image-remove-button"]}>
									Change
								</button>
								<button className={classes["image-add-button"]}>Remove</button>
							</div>
						</div>
						<form className={classes["company-description"]}>
							<p
								className={
									classes["company-description-heading"] +
									" " +
									classes["regular-text"]
								}
							>
								Description
							</p>
							<p
								className={
									classes["input"] +
									" " +
									classes["regular-text"] +
									" " +
									classes["description-text"]
								}
							>
								Lorem ipsum dolor sit amet consectetur. Pulvinar viverra posuere
								vitae neque congue at volutpat sit. Imperdiet hendrerit sit
								fermentum a amet. Phasellus aliquet condimentum nec non
								scelerisque nec risus.
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
