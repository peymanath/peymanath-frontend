import { SkillAddType } from "@/Types/Services";
import { strapi } from "../HttpServises";

export default async function SkillsAddRequest({ values }: SkillAddType) {
	return await strapi
		.post("/skills?populate=*", {
			data: {
				...values,
			},
		});
}
