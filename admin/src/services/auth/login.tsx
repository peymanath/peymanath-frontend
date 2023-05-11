import { LoginRequestType } from "@/Types/Services";
import { strapi } from "../HttpServises";

export default async function LoginRequest({ values }: LoginRequestType) {
	return await strapi.post("/auth/local", values);
}
