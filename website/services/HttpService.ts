import axios from "axios";

const peymanath = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASEURL_API,
    timeout:30000,
    timeoutErrorMessage:"ارسال درخواست خیلی طول کشید",
    headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_BASEURL_API_USER_TOKEN}`,
	},
});

export const http = {
	get: peymanath.get,
	post: peymanath.post,
	put: peymanath.put,
	delete: peymanath.delete,
	patch: peymanath.patch,
};
