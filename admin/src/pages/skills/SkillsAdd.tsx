import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";
import Input from "@/components/common/Input";
import { useFormik, FormikProps } from "formik";
import { SkillsAddFormValues } from "@/types/pages";
import * as Yup from "yup";
import LoginRequest from "@/services/auth/login";
import { useHeader } from "@/context/HeaderProvider";
import { useLoading } from "@/context/LoadingProvider";
import ImageUploader from "@/components/common/ImageUploader";

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

	const onSubmit = (
		values: SkillsAddFormValues,
		{ setSubmitting }: { setSubmitting: Function },
	) => {
		// setIsLoading(true);
		setTimeout(() => {
			// setIsLoading(false);
			setSubmitting(false);
		}, 2000);
	};
	const validationSchema = Yup.object({
		skillsNameFa: Yup.string()
			.trim()
			.matches(
				/^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF7\u200C\u200F ]+$/,
				"لطفا در این قسمت فقط فارسی تایپ کنید.",
			)
			.required("نام فارسی مهارت ضروری است."),
		skillsNameEn: Yup.string()
			.matches(/^[A-Za-z0-9]+$/, "لطفا در این قسمت فقط انگلیسی تایپ کنید.")
			.required("نام انگلیسی مهارت ضروری است."),
		descriptin: Yup.string().required("توضیحات ضروری است."),
	});
	const initialValues: SkillsAddFormValues = {
		skillsNameFa: "",
		skillsNameEn: "",
		descriptin: "",
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
				className="flex flex-wrap w-full items-start justify-between gap-6">
				<div className="flex flex-col w-full md:w-[48%] xl:w-[64%] gap-6 bg-white p-3 rounded-lg shadow">
					<Input
						name="skillsNameFa"
						label="نام مهارت به فارسی"
						formik={formik}
					/>
					<Input
						name="skillsNameEn"
						label="نام مهارت به انگلیسی"
						formik={formik}
					/>
					<Input name="descriptin" label="توضیحات مهارت" formik={formik} />
				</div>

				<div className="flex flex-col w-full md:w-[48%] xl:w-[31%] gap-6">
					<div className="bg-white p-3 rounded-lg shadow">
						<ImageUploader formik={formik} />
					</div>
					<div className="bg-white p-3 rounded-lg shadow">
						<button
							type="submit"
							className="bg-primary text-white w-full h-full py-2 px-5 border border-primary rounded-md duration-300 hover:bg-white hover:text-primary disabled:opacity-40 disabled:hover:bg-primary disabled:hover:text-white"
							disabled={!formik.isValid || formik.isSubmitting}>
							{formik.isSubmitting ? "در حال پردازش" : "افزودن مهارت"}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
