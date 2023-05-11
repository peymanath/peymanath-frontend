import { SkillSingleType } from "@/Types/Services";
import { strapi } from "../HttpServises";
import {
	SkillsResponseData,
	SkillsListItem,
} from "@/Types/Pages";

export default async function GetSkillSingleRequest({ id }: SkillSingleType) {
	return await strapi
		.get<SkillsListItem, SkillsResponseData>(`/skills/${id}?populate=*`)
		.then(res => {
			if (res.status === 200) {
				return res.data.data;
			}
		});
}
