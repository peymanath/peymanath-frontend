import { Http } from "@/types/services";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const http: Http = {
	get: axios.get,
	put: axios.put,
	delete: axios.delete,
	post: axios.post,
};
