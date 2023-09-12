import React, { useState, createContext, useContext } from "react";
import SideNav from "./SideNav";

const SidenavContext = createContext({});

export const SidenavProvider = ({ children }) => {
	const [sidenavRTL, setSidenavRTL] = useState(false);
	const [sidenavBackgroundColor, setSidenavBackgroundColor] =
		useState(undefined);
	const [sidenavImage, setSidenavImage] = useState(undefined);
	return (
		<SidenavContext.Provider
			value={{
				sidenavBackgroundColor,
				setSidenavBackgroundColor,

				sidenavImage,
				setSidenavImage,

				sidenavRTL,
				setSidenavRTL,
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: sidenavRTL ? "row-reverse" : "row",
				}}
			>
				<SideNav />
				{children}
			</div>
		</SidenavContext.Provider>
	);
};

export const useSidenavContext = () => useContext(SidenavContext);
