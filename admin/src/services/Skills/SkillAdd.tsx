import { SkillAddType } from "@/Types/Services";
import { mockapi } from "../HttpServises";

export default async function SkillsAddRequest({ values }: SkillAddType) {
	return await mockapi.post("/skills", values, {
		headers: {
			"Content-Type": "application/json",
		},
	});
}
