import React from "react";
import { FaRegBell, FaChevronDown } from "react-icons/fa6";
import { BsChevronDown } from "react-icons/bs";
import classes from "./Topbar.module.css";
import profile from "../assets/images/profile.jpg";
const Topbar = () => {
	return (
		<div className={classes["topbar-container"]}>
			<div className={classes["welcome-text-section"]}>
				<p className={classes["personal-text"]}>
					Hello, Manik{" "}
					<span className={classes["welcome-text"]}>Welcome back!</span>
				</p>
			</div>
			<div className={classes["personal-info-section"]}>
				<FaRegBell className={classes["bell-icon"]} />
				<img className={classes["profile-picture"]} src={profile}></img>
				<p className={classes["profile-name-text"]}>Elias Manik</p>
				<FaChevronDown className={classes["chevron-down-icon"]} />
			</div>
		</div>
	);
};

export default Topbar;
