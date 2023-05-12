import { SkillsAddFormValues } from "@/Types/Pages";
import * as Yup from "yup";

export const validationSchemaSkill = Yup.object({
	titleFa: Yup.string()
		.trim()
		.matches(
			/^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF7\u200C\u200F ]+$/,
			"لطفا در این قسمت فقط فارسی تایپ کنید.",
		)
		.required("نام فارسی مهارت ضروری است."),
	titleEn: Yup.string()
		.matches(/^[A-Za-z0-9 ]+$/, "لطفا در این قسمت فقط انگلیسی تایپ کنید.")
		.required("نام انگلیسی مهارت ضروری است."),
	descriptin: Yup.string().required("توضیحات ضروری است."),
});

export const initialValuesSkill: SkillsAddFormValues = {
	titleFa: "",
	titleEn: "",
	descriptin: "",
	thumbnail: "9",
	skill_projects: [],
	recommends: [],
};
