import { SkillSingleType } from "@/Types/Services";
import { mockapi } from "../HttpServises";
import { SkillSingleResponseData, SkillsListItem, SkillsResponseData } from "@/Types/Pages";

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
