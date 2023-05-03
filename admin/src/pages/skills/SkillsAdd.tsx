import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";
import Input from "@/components/common/Input";
import { useFormik, FormikProps } from "formik";
import { SkillsAddFormValues } from "@/types/pages";
import * as Yup from "yup";
import LoginRequest from "@/services/auth/login";
import { useHeader } from "@/context/HeaderProvider";
import { useLoading } from "@/context/LoadingProvider";

export default function SkillsAdd() {
	const { globalStore, setGlobalStore } = useGlobalStore();
	const { setIsLoading } = useLoading();

	useEffect(() => {
		setGlobalStore({
			...globalStore,
			titleHeader: "افزودن مهارت",
			showMenu: false,
		});
	}, []);

	const onSubmit = (values: SkillsAddFormValues) => {
		setIsLoading(true);
	};
	const validationSchema = Yup.object({
		skillsNameFa: Yup.string().trim().matches(/^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF7\u200C\u200F ]+$/ , 'لطفا در این قسمت فقط فارسی تایپ کنید.').required("نام فارسی مهارت ضروری است."),
		skillsNameEn: Yup.string().matches(/^[A-Za-z0-9]+$/ , 'لطفا در این قسمت فقط انگلیسی تایپ کنید.').required("نام انگلیسی مهارت ضروری است."),
		descriptin: Yup.string().required("توضیحات ضروری است."),
		imageUrl: Yup.string().required("آدرس عکس ضروری است."),
	});
	const initialValues: SkillsAddFormValues = {
		skillsNameFa: "تایپ اسکریپت",
		skillsNameEn: "Typescript",
		descriptin:
			"زبان برنامه نویسی | همان جاوااسکریپت میباشد اما با قابلیت کنترل تایپ ها",
		imageUrl: "typescript.png",
	};
	const formik: FormikProps<SkillsAddFormValues> =
		useFormik<SkillsAddFormValues>({
			initialValues,
			onSubmit,
			validationSchema,
		});
	return (
		<div>
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col items-center gap-y-6 w-full">
				<div className="flex flex-col gap-y-2 w-full">
					<Input name="skillsNameFa" label="نام مهارت به فارسی" formik={formik} />
					<Input name="skillsNameEn" label="نام مهارت به انگلیسی" formik={formik} />
					<Input name="descriptin" label="توضیحات مهارت" formik={formik} />
					<Input name="imageUrl" label="ادرس عکس" formik={formik} />
				</div>

				<div className="flex w-full">
					<button
						type="submit"
						className="bg-primary text-white w-full h-full py-2 px-5 border border-primary rounded-md duration-300 hover:bg-white hover:text-primary">
						افزودن مهارت
					</button>
				</div>
			</form>
		</div>
	);
}
