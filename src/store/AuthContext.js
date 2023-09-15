import React, { createContext, useState, useContext } from "react";
import {
	loginService,
	logoutService,
	registerService,
} from "../services/authServices";

export const AuthContext = createContext({
	currentUser: null,
	login: () => {},
	logout: () => {},
	register: () => {},
});

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);

	async function login(data) {
		const user = await loginService(data);
		console.log("user : ", user);
		setCurrentUser(user.user);
		console.log(currentUser);
	}

	function logout() {
		// Call to the actual logout service
		logoutService();
		setCurrentUser(null);
	}

	async function register(data) {
		const value = await registerService(data);
		setCurrentUser(value);
		return value;
	}

	const value = {
		user: currentUser,
		userLogin: login,
		userLogout: logout,
		userRegister: register,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
