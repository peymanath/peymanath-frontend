import { SkillEditType } from "@/Types/Services";
import { strapi } from "../HttpServises";
import { SkillsResponseData, SkillsListItem } from "@/Types/Pages";

export default async function SkillEditRequest({ id, values }: SkillEditType) {
	return await strapi
		.put<SkillsListItem, SkillsResponseData>(`/skills/${id}`, {
			data: {
				...values,
			},
		})
		.then(res => {
			if (res.status === 200) {
				return res.data;
			}
		});
}
