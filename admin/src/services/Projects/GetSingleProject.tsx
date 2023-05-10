import { ProjectSingleType } from "@/types/services";
import { mockapi } from "../httpServises";
import { ProjectSingleResponseData, ProjectsListItem } from "@/types/pages";

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
