import { Http } from "@/types/services";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export const http: Http = {
	get: axios.get,
	put: axios.put,
	delete: axios.delete,
	post: axios.post,
};
