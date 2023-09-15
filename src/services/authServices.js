export const generateRandomString = (length) => {
	const alphanumericChars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
		result += alphanumericChars.charAt(randomIndex);
	}
	return result;
};

export const loginService = async (data) => {
	let password = data.user_password;
	let email = data.user_email;
	password =
		password.slice(0, 4) +
		generateRandomString(8) +
		password.slice(4, password.length);

	const user_data = {
		user_email: email,
		user_password: password,
	};

	console.log(email);
	console.log(password);

	try {
		const response = await fetch(`http://127.0.0.1:5000/api/v1/login`, {
			method: "POST",
			mode: "cors",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user_data),
		});
		const data = await response.json();
		console.log("data : ", data);
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return error;
	}
};

export const registerService = async (data) => {
	const email = data.email;
	const full_name = data.name;
	let password = data.password;

	password =
		password.slice(0, 4) +
		generateRandomString(8) +
		password.slice(4, password.length);

	const user_data = {
		user_name: full_name,
		user_email: email,
		user_password: password,
	};

	try {
		const response = await fetch(`http://127.0.0.1:5000/api/v1/register`, {
			method: "POST",
			mode: "cors",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user_data),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return error;
	}
};

export const logoutService = (data) => {
	console.log("user logged out");
};
