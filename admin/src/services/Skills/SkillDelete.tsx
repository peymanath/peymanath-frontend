import { SkillDeleteType } from "@/types/services";
import { mockapi } from "../httpServises";
import { SkillsListItem, SkillsResponseData } from "@/types/pages";

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
