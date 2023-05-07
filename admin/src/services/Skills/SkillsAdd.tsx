import { SkillsAddType } from "@/types/services";
import { mockapi } from "../httpServises";

export default async function SkillsAddRequest({ values }: SkillsAddType) {
	return await mockapi.post("/skills", values, {
		headers: {
			"Content-Type": "application/json",
		},
	});
}
