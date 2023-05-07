import { mockapi } from "../httpServises";
import { SkillsListItem, SkilssResonseData } from "@/types/pages";

export default async function GetSkillsRequest() {
	return await mockapi
		.get<SkillsListItem[], SkilssResonseData>("/skills", {
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
