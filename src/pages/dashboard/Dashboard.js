import React from "react";

import { tokens } from "../../theme";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette);
	return (
		<div
			style={{
				background: `${colors.blackComponent[500]}`,
				width: "100%",
				color: "#FFFFFF",
				padding: "1.5rem 0 3rem",
			}}
		>
			<div>Hello, Manik Welcome back!</div>
		</div>
	);
};

export default Dashboard;
