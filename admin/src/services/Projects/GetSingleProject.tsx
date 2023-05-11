import { ProjectSingleType } from "@/Types/Services";
import { mockapi } from "../HttpServises";
import { ProjectSingleResponseData, ProjectsListItem } from "@/Types/Pages";

export default async function GetProjectSingleRequest({
	id,
}: ProjectSingleType) {
	return await mockapi
		.get<ProjectsListItem, ProjectSingleResponseData>(`/projects/${id}`, {
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
