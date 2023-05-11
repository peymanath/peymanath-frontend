
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
        .matches(/^[A-Za-z0-9]+$/, "لطفا در این قسمت فقط انگلیسی تایپ کنید.")
        .required("نام انگلیسی مهارت ضروری است."),
    descriptin: Yup.string().required("توضیحات ضروری است."),
    recommmendations: Yup.number()
        .typeError("فقط عدد میتوانید وارد کنید")
        .positive()
        .min(0, "کمترین مقدار ممکن 0 است.")
        .required("تعداد توصیه ها ضروری است.")
        .nonNullable(),
    projects: Yup.number()
        .typeError("فقط عدد میتوانید وارد کنید")
        .positive()
        .min(0, "کمترین مقدار ممکن 0 است.")
        .required("تعداد پروژه ها ضروری است.")
        .nonNullable(),
});


export const initialValuesSkill: SkillsAddFormValues = {
    id: 0,
    titleFa: "",
    titleEn: "",
    descriptin: "",
    thumbnail: "",
    recommmendations: 0,
    projects: 0,
    publishedAt: new Date(),
};