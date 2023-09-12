import { createContext, useState, useMemo } from "react";

import { createTheme } from "@mui/material/styles";

// color design tokens export

export const tokens = () => ({
	black: {
		100: "#d0ced1",
		200: "#a09da2",
		300: "#716c74",
		400: "#413b45",
		500: "#120a17",
		600: "#0e0812",
		700: "#0b060e",
		800: "#070409",
		900: "#040205",
	},
	blackComponent: {
		100: "#d3d0d4",
		200: "#a6a2a9",
		300: "#7a737d",
		400: "#4d4552",
		500: "#211627",
		600: "#1a121f",
		700: "#140d17",
		800: "#0d0910",
		900: "#070408",
	},
	primary: {
		100: "#ffffff",
		200: "#ffffff",
		300: "#ffffff",
		400: "#ffffff",
		500: "#ffffff",
		600: "#cccccc",
		700: "#999999",
		800: "#666666",
		900: "#333333",
	},
	greenAccent: {
		100: "#dbf5ee",
		200: "#b7ebde",
		300: "#94e2cd",
		400: "#70d8bd",
		500: "#4cceac",
		600: "#3da58a",
		700: "#2e7c67",
		800: "#1e5245",
		900: "#0f2922",
	},
	redAccent: {
		100: "#f8d3d6",
		200: "#f1a7ac",
		300: "#ea7c83",
		400: "#e35059",
		500: "#dc2430",
		600: "#b01d26",
		700: "#84161d",
		800: "#580e13",
		900: "#2c070a",
	},
	blueAccent: {
		100: "#e5d9ea",
		200: "#cab4d5",
		300: "#b08ec1",
		400: "#9569ac",
		500: "#7b4397",
		600: "#623679",
		700: "#4a285b",
		800: "#311b3c",
		900: "#190d1e",
	},
});

// mui theme settings
export const themeSettings = (mode) => {
	const colors = tokens(mode);
	return {
		palette: {
			primary: {
				main: colors.primary[500],
			},
			secondary: {
				main: colors.blueAccent[500],
			},
			neutral: {
				main: colors.redAccent[500],
				black: colors.black[500],
				white: colors.primary[500],
			},
		},
		padding: {
			light: 10,
			medium: 20,
			heavy: 30,
		},
		typography: {
			fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
			fontSize: 12,
			h1: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 40,
			},
			h2: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 32,
			},
			h3: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 24,
			},
			h4: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 20,
			},
			h5: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 16,
			},
			h6: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 14,
			},
		},
	};
};

// context for color mode
export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const [mode, setMode] = useState("dark");
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prevMode) => (prevMode === "dark" ? "light" : "dark")),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return [theme, colorMode];
};
