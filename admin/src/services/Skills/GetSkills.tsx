import { mockapi } from "../httpServises";
import { SkillsListItem, SkillsResponseData } from "@/types/pages";

export default async function GetSkillsRequest() {
	return await mockapi
		.get<SkillsListItem[], SkillsResponseData>("/skills", {
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
