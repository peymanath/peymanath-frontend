import { mockapi } from "../httpServises";
import { ProjectsListItem, ProjectsResponseData } from "@/types/pages";

export default async function GetProjectsRequest() {
	return await mockapi
		.get<ProjectsListItem[], ProjectsResponseData>("/projects", {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then(res => {
			if (res.status === 200) {
				return res.data;
			}
		});
}
