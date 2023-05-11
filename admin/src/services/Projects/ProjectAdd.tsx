import { ProjectAddType } from "@/Types/Services";
import { mockapi } from "../HttpServises";

export default async function ProjectAddRequest({ values }: ProjectAddType) {
	return await mockapi.post("/projects", values, {
		headers: {
			"Content-Type": "application/json",
		},
	});
}
