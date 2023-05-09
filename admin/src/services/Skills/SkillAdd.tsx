import { SkillAddType } from "@/types/services";
import { mockapi } from "../httpServises";

export default async function SkillsAddRequest({ values }: SkillAddType) {
	return await mockapi.post("/skills", values, {
		headers: {
			"Content-Type": "application/json",
		},
	});
}
