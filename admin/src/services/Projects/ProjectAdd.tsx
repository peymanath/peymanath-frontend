import { ProjectAddType } from "@/types/services";
import { mockapi } from "../httpServises";

export default async function ProjectAddRequest({ values }: ProjectAddType) {
	return await mockapi.post("/projects", values, {
		headers: {
			"Content-Type": "application/json",
		},
	});
}
