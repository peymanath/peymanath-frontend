import { ProjectDeleteType } from "@/types/services";
import { mockapi } from "../httpServises";
import { ProjectsListItem, ProjectsResponseData } from "@/types/pages";

export default async function ProjectDeleteRequest({ id }: ProjectDeleteType) {
	return await mockapi.delete<ProjectsListItem[], ProjectsResponseData>(
		`/project/${id}`,
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
}
