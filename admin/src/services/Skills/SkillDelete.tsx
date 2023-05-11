import { SkillDeleteType } from "@/Types/Services";
import { strapi } from "../HttpServises";
import { SkillsListItem, SkillsResponseData } from "@/Types/Pages";

export default async function SkillDeleteRequest({ id }: SkillDeleteType) {
	return await strapi.delete<SkillsListItem[], SkillsResponseData>(
		`/skills/${id}?populate=*`,
	);
}
