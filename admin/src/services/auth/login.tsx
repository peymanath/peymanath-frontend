import { LoginRequestType } from "@/types/services";
import { http } from "../httpServises";

export default async function LoginRequest({ values }: LoginRequestType) {
	const headers = {
		"Content-Type": "application/json",
	};

	return http.post("/auth/login", values, {
		headers,
	});
}
