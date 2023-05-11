import { mockapi } from "../HttpServises";
import { SkillsListItem, SkillsResponseData } from "@/Types/Pages";

export default async function GetSkillsRequest() {
	return await mockapi
		.get<SkillsListItem[], SkillsResponseData>("/skills?populate=*")
		.then(res => {
			if (res.status === 200) {
				return res.data;
			}
		});
}
