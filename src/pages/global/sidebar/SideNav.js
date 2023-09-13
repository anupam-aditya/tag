// This component will be the sidebat component for the application. The sidebar component will be used in the App.js file.
// This component will be made using react-pro-sidebar. This component will be used to display the sidebar for the application.
// The sidebar will be used to navigate to the different pages in the application.
// Upon clicking on a link in the sidebar, the user will be shown different pages in the application withour redirecting the page, so like if the user viewing the Dashboard section and clicks on the Ad Analysis Section that should be shown to the user.
// At the top of the sidebar, there will be a heading for the project 'Volkano AI' which will be a link to the dashboard section of the page. The Dashboard will be the default section when the application loads.
// This will be followed by a link to the Ad Analysis section of the application.
// This will be followed by Generated Ads and then Ad Edir the Ad Review then Ready to Publish then Ad Structure Setup then Integrations then Settings then Logout.
// The Height of the section will be equal to the view port for desktops and tablets and 100% for mobile devices.
// The width of the sidebar will be 20% of the view port for desktops and tablets and 100% for mobile devices.
// The sidebar will be fixed to the left of the screen.
//  Below is the code for the sidebar component.

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Import the ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent components from react-pro-sidebar.
import {
	Sidebar,
	Menu,
	MenuItem,
	SubMenu,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
} from "react-pro-sidebar";
import { tokens } from "../../../theme";
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
// Import sidebar css from react-pro-sidebar module and our custom css.
// The way styles are imported below is throwing an error
// import "react-pro-sidebar/dist/css/styles.css";
// DC2430
// 7B4397
import "./Sidebar.css";
// Create a sidebar component for a sidebar at the left of the page. This component will be used in the App.js file.

const Item = ({ title, to, icon, selected, setSelected, navigate }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette);
	const clickHandler = (e, setSelected) => {
		setSelected(e.target.innerText);
	};
	return (
		<MenuItem
			active={selected === title}
			onClick={() => {
				setSelected(title);
				navigate(to);
			}}
			icon={icon}
			components={<Link to={to} />}
		>
			{title}
		</MenuItem>
	);
};
const SideNav = (props) => {
	//The sidebar will be used to navigate to the different pages in the application for which state management will be used.
	// Return a sidebar component with a ProSidebar component from react-pro-sidebar.
	// The ProSidebar component will have a Menu component from react-pro-sidebar.
	// The Menu component will have a MenuItem component from react-pro-sidebar for each of the pages in the application.
	// The MenuItem component will have a Link component from react-router-dom.
	// The Link component will be used to navigate to the different pages in the application.
	const theme = useTheme();
	const colors = tokens(theme.palette);
	const [selected, setSelected] = useState("Dashboard");
	const navigate = useNavigate();
	return (
		<IconContext.Provider value={{ color: "#fff" }}>
			<Box
				sx={{
					backgroundColor: `${colors.black[500]}`,
					width: "17%",
					height: "100vh",
					"& .ps-sidebar-root": {
						border: "none!important",
						width: "100%",
					},
					"& .ps-sidebar-container": {
						backgroundColor: `${colors.black[500]}`,
						height: "100vh",
					},
					"& .ps-menu-button": {
						// padding: "5px 35px 5px 20px !important",
						color: `${colors.primary[500]}!important`,
						textAlign: "left",
						borderRadius: "4px",
						width: "90%",
						margin: "auto",
						padding: "10px!important",
					},
					"& .menu-anchor": {
						color: "inherit !important",
						backgroundColor: "transparent !important",
					},
					"& .ps-menu-button:hover": {
						background: `linear-gradient(to right, ${colors.blueAccent[500]}, ${colors.redAccent[500]})!important`,
					},
					"& .ps-menu-button.ps-active": {
						background: `linear-gradient(to right, ${colors.blueAccent[500]}, ${colors.redAccent[500]})!important`,
						transition: "background 3s ease-in-out",
					},
					"& .ps-menu-root>ul": {
						display: "flex",
						flexDirection: "column",
						gap: "0.5rem!important",
					},
				}}
			>
				<Sidebar sx={{ width: "100%" }}>
					{/* <SidebarHeader>VOLKANO AI</SidebarHeader> */}
					<Menu sx={{ gap: "10px" }}>
						<Item
							title="Dashboard"
							to="/dashboard"
							icon={<RxDashboard />}
							selected={selected}
							setSelected={setSelected}
							navigate={navigate}
						/>
						<Item
							title="Ad Analysis"
							to="/ad_analysis"
							icon={<RxDashboard />}
							selected={selected}
							setSelected={setSelected}
							navigate={navigate}
						/>
						<Item
							title="Generated Ads"
							to="/generated_ads"
							icon={<RxDashboard />}
							selected={selected}
							setSelected={setSelected}
							navigate={navigate}
						/>
						<Item
							title="Ad Edit"
							to="/ad_edit"
							icon={<RiPencilLine />}
							selected={selected}
							setSelected={setSelected}
							navigate={navigate}
						/>
						<Item
							title="Ad Review"
							to="/ad_review"
							icon={<RxDashboard />}
							selected={selected}
							setSelected={setSelected}
							navigate={navigate}
						/>
						<Item
							title="Ready To Publish"
							to="/publish"
							icon={<RxDashboard />}
							selected={selected}
							setSelected={setSelected}
							navigate={navigate}
						/>
						<Item
							title="Ad Structure Setup"
							to="/ad_structure"
							icon={<RxDashboard />}
							selected={selected}
							setSelected={setSelected}
							navigate={navigate}
						/>
						<Item
							title="Integrations"
							to="/integrations"
							icon={<RxDashboard />}
							selected={selected}
							setSelected={setSelected}
							navigate={navigate}
						/>
						<Item
							title="Settings"
							to="/settings"
							icon={<BiCog />}
							selected={selected}
							setSelected={setSelected}
							navigate={navigate}
						/>
					</Menu>
				</Sidebar>
			</Box>
		</IconContext.Provider>
	);
};
export default SideNav;
