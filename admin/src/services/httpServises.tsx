import { Http } from "@/Types/Services";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_LOGIN;

export const mockapi = axios.create({
	baseURL: process.env.REACT_APP_API_MOCkAPI,
	timeout: 60000,
	headers: { "Content-Type": "application/json" },
});

export const strapi = axios.create({
	baseURL: process.env.REACT_APP_API_BACKEND,
	timeout: 20000,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.REACT_APP_API_BACKEND_TOKEN}`,
	},
});

export const http: Http = {
	get: axios.get,
	put: axios.put,
	delete: axios.delete,
	post: axios.post,
};
