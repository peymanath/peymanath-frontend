import { SkillSingleType } from "@/types/services";
import { mockapi } from "../httpServises";
import { SkillSingleResponseData, SkillsListItem, SkillsResponseData } from "@/types/pages";

export default async function GetSkillSingleRequest({ id }: SkillSingleType) {
	return await mockapi
		.get<SkillsListItem, SkillSingleResponseData>(`/skills/${id}`, {
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
