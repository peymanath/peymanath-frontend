import ImageUploader from "@/components/ImageUploder/ImageUploader";
import Button from "@/components/common/Button";
import { LoadingDashed } from "react-huge-icons/outline";
import { useGlobalStore } from "@/context/GlobalStoreProvider";
import React, { useEffect, useCallback } from "react";
import Input from "@/components/common/Input";
import { useFormik, FormikProps } from "formik";
import { SkillsAddFormValues } from "@/types/pages";
import * as Yup from "yup";
import SkillsAddRequest from "@/services/Skills/SkillsAdd";
import { onSubmitFormik } from "@/types/services";
import { useNavigate } from "react-router-dom";

function SkillsAdd() {
	const navigate = useNavigate();
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ titleHeader: "افزودن مهارت" });
	}, []);

	const now = new Date();
	const onSubmit = useCallback(
		(
			values: SkillsAddFormValues,
			{ setSubmitting, resetForm }: onSubmitFormik,
		) => {
			SkillsAddRequest({ values })
				.then(() => {
					setSubmitting(false);
					resetForm();
					setGlobalStore({ isLoading: true });
					setTimeout(() => {
						setGlobalStore({ isLoading: false });
						navigate("/skills");
					}, 1000);
				})
				.catch(err => console.error(err));
		},
		[],
	);
	const validationSchema = Yup.object({
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

	const initialValues: SkillsAddFormValues = {
		titleFa: "",
		titleEn: "",
		descriptin: "",
		thumbnail: "favicon.svg",
		recommmendations: 0,
		projects: 0,
		publishedAt: now,
	};

	const formik: FormikProps<SkillsAddFormValues> =
		useFormik<SkillsAddFormValues>({
			initialValues,
			onSubmit,
			validationSchema,
		});
console.log(formik.values.thumbnail);
	return (
		<div>
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-wrap w-full items-start justify-between"
				encType="multipart/form-data">
				<div className="flex flex-col w-full md:w-[48%] xl:w-[65%] gap-6 bg-white p-3 rounded-lg shadow">
					<h2 className="w-full text-lg font-bold">اطلاعات مهارت جدید</h2>
					<Input name="titleFa" label="نام مهارت به فارسی" formik={formik} />
					<Input name="titleEn" label="نام مهارت به انگلیسی" formik={formik} />
					<Input name="descriptin" label="توضیحات مهارت" formik={formik} />
					<Input
						name="recommmendations"
						label="تعداد توصیه ها"
						formik={formik}
					/>
					<Input
						name="projects"
						label="تعداد پروژه های این مهارت"
						formik={formik}
					/>
					<Button
						type="submit"
						className="w-36"
						disabled={!formik.isValid || formik.isSubmitting}>
						{formik.isSubmitting ? (
							<LoadingDashed className="w-6 h-6 animate-spin" />
						) : (
							"افزودن مهارت"
						)}
					</Button>
				</div>

				<div className="flex flex-col w-full md:w-[48%] xl:w-[33%] gap-6">
					<div className="bg-white p-3 rounded-lg shadow">
						<ImageUploader formik={formik} />
					</div>
				</div>
			</form>
		</div>
	);
}
export default React.memo(SkillsAdd);
