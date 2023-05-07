import ImageUploader from "@/components/ImageUploder/ImageUploader";
import Button from "@/components/common/Button";
import { LoadingDashed } from "react-huge-icons/outline";
import { useGlobalStore } from "@/context/GlobalStoreProvider";
import React, { useEffect, useCallback } from "react";
import Input from "@/components/common/Input";
import { useFormik, FormikProps } from "formik";
import { SkillsAddFormValues } from "@/types/pages";
import * as Yup from "yup";

function SkillsAdd() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ titleHeader: "افزودن مهارت" });
	}, []);

	const onSubmit = useCallback(
		(
			values: SkillsAddFormValues,
			{ setSubmitting }: { setSubmitting: Function },
		) => {
			console.log(values);

			setTimeout(() => {
				setSubmitting(false);
			}, 2000);
		},
		[],
	);
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
		thumbnail: "",
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
				className="flex flex-wrap w-full items-start justify-between"
				encType="multipart/form-data">
				<div className="flex flex-col w-full md:w-[48%] xl:w-[65%] gap-6 bg-white p-3 rounded-lg shadow">
					<h2 className="w-full text-lg font-bold">اطلاعات مهارت جدید</h2>
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
