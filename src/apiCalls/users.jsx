import { axiosInstance } from "./index";

export const registerUser = async (payload) => {
	try {
		const response = await axiosInstance.post('/api/users/register', payload);
		return response.data;
	} catch (error) {
		return error.response ? error.response.data : { success: false, message: "An error occurred" };
	}
};

export const loginUser = async (payload) => {
	try {
		const response = await axiosInstance.post('/api/users/login', payload);
		return response.data;
	} catch (error) {
		return error.response ? error.response.data : { success: false, message: "An error occurred" };
	}
};
