import { SkillDeleteType } from "@/Types/Services";
import { mockapi } from "../HttpServises";
import { SkillsListItem, SkillsResponseData } from "@/Types/Pages";

export default async function SkillDeleteRequest({ id }: SkillDeleteType) {
	return await mockapi.delete<SkillsListItem[], SkillsResponseData>(
		`/skills/${id}`,
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
}
