import React, { createContext, useState, useContext } from "react";

const AppStateContext = createContext();

export function useAppState() {
	return useContext(AppStateContext);
}

export function AppStateProvider({ children }) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () =>
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

	const value = {
		theme,
		toggleTheme,
	};

	return (
		<AppStateContext.Provider value={value}>
			{children}
		</AppStateContext.Provider>
	);
}
