import ImageUploader from "@/components/ImageUploder/ImageUploader";
import Button from "@/components/common/Button";
import { LoadingDashed } from "react-huge-icons/outline";
import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch, useAppSelector } from "@/redux/Hook";
import React, { useEffect, useCallback, useState } from "react";
import Input from "@/components/common/Input";
import { useFormik, FormikProps } from "formik";
import { ProjectAddFormValues, SkillsListItem } from "@/Types/Pages";
import * as Yup from "yup";
import { onSubmitFormik } from "@/Types/Services";
import { NavLink, useNavigate } from "react-router-dom";
import { Color } from "@/Global/Global";
import { getAsyncSkills } from "@/redux/Skills/SkillsSlice";
import {
	allowedLoading,
	disAllowedLoading,
} from "@/redux/Loading/LoadingSlice";
import CheckBoxInput from "@/components/common/CheckBoxInpot";
import { CheckBoxInputItemInterface } from "@/Types/Components";
import ProjectAddRequest from "@/services/Projects/ProjectAdd";

function ProjectAdd() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [skillsData, setSkillsData] = useState<CheckBoxInputItemInterface[]>();
	const { skillsItem, loading } = useAppSelector(state => state.skills);

	const onSubmit = useCallback(
		(
			values: ProjectAddFormValues,
			{ setSubmitting, resetForm }: onSubmitFormik,
		) => {
			ProjectAddRequest({ values })
				.then(() => {
					setSubmitting(false);
					resetForm();
					dispatch(allowedLoading());
					setTimeout(() => {
						dispatch(disAllowedLoading());
						navigate("/projects");
					}, 1000);
				})
				.catch(err => {
					console.error(err);
					setSubmitting(false);
					dispatch(disAllowedLoading());
				});
		},
		[],
	);

	const validationSchema = Yup.object({
		title: Yup.string().required("نام پروژه ضروری است."),
		descriptin: Yup.string().required("توضیحات ضروری است."),
		skills: Yup.array()
			.min(1, "حداقل یک مهارت ضروری است")
			.required("فیلد مهارت ها ضروری است"),
	});

	const initialValues: ProjectAddFormValues = {
		title: "",
		descriptin: "",
		thumbnail: "favicon.svg",
		publishedAt: new Date(),
		skills: [],
	};

	const formik: FormikProps<ProjectAddFormValues> =
		useFormik<ProjectAddFormValues>({
			initialValues,
			onSubmit,
			validationSchema,
		});

	const getData = () => {
		dispatch(getAsyncSkills());
	};

	useEffect(() => {
		// const allSkill =
		// 	!!skillsItem &&
		// 	skillsItem.map(skillItem => {
		// 		const newItem: CheckBoxInputItemInterface = {
		// 			lable: skillItem.titleEn,
		// 			value: skillItem.titleEn,
		// 		};
		// 		return newItem;
		// 	});
		// setSkillsData(allSkill || []);
	}, [skillsItem]);

	useEffect(() => {
		dispatch(loading ? allowedLoading() : disAllowedLoading());
	}, [loading]);

	useEffect(() => {
		dispatch(newTitle("افزودن پروژه"));
		getData();
	}, []);

	return (
		<>
			<div className="flex items-center justify-between w-full gap-6 bg-white p-3 rounded-lg shadow mb-7">
				<p>میخواهید تمامی پروژه ها را مشاهده کنید؟</p>
				<NavLink to="/projects">
					<Button text="مشاهده پروژه ها" width="w-auto" color={Color.primary} />
				</NavLink>
			</div>
			<div>
				<form
					onSubmit={formik.handleSubmit}
					className="flex flex-wrap w-full items-start justify-between"
					encType="multipart/form-data">
					<div className="flex flex-col w-full md:w-[48%] xl:w-[65%] gap-6 bg-white p-3 rounded-lg shadow">
						<h2 className="w-full text-lg font-bold">اطلاعات پروژه جدید</h2>
						<Input name="title" label="نام پروژه" formik={formik} />
						<Input name="descriptin" label="توضیحات پروژه" formik={formik} />

						{!!skillsData?.length ? (
							<CheckBoxInput
								name="skills"
								lableFiled="مهارت ها"
								formik={formik}
								checkboxData={skillsData}
							/>
						) : (
							<div className="flex flex-col items-center border border-red-500 rounded-lg p-3 gap-5">
								<div className="flex flex-wrap items-center gap-3 text-red-500 font-bold">
									برای ادامه فرایند باید حداقل یک مهارت اضافه کرده باشید
								</div>
								<div className="flex flex-wrap items-center gap-3">
									<p>میخوای اولین مهارت خودت رو اضافه کنی؟</p>
									<NavLink
										to="/skill/add"
										className="text-primary hover:opacity-80 font-bold">
										افزودن مهارت جدید
									</NavLink>
								</div>
							</div>
						)}

						<Button
							type="submit"
							className="w-36"
							disabled={!formik.isValid || formik.isSubmitting}>
							{formik.isSubmitting ? (
								<LoadingDashed className="w-6 h-6 animate-spin" />
							) : (
								"افزودن پروژه"
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
		</>
	);
}
export default React.memo(ProjectAdd);
