import { ProjectEditType } from "@/Types/Services";
import { mockapi } from "../HttpServises";
import { ProjectSingleResponseData, ProjectsListItem } from "@/Types/Pages";

export default async function ProjectEditRequest({
	id,
	values,
}: ProjectEditType) {
	return await mockapi
		.put<ProjectsListItem, ProjectSingleResponseData>(
			`/projects/${id}`,
			values,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		)
		.then(res => {
			if (res.status === 200) {
				return res.data;
			}
		});
}
