import { ProjectDeleteType } from "@/Types/Services";
import { mockapi } from "../HttpServises";
import { ProjectsListItem, ProjectsResponseData } from "@/Types/Pages";

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
