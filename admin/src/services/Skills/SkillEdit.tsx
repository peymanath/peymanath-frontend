import { SkillEditType } from "@/Types/Services";
import { mockapi } from "../HttpServises";
import { SkillSingleResponseData, SkillsListItem } from "@/Types/Pages";

export default async function SkillEditRequest({ id, values }: SkillEditType) {
	return await mockapi
		.put<SkillsListItem, SkillSingleResponseData>(`/skills/${id}`, values, {
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
