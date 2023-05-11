import { NavLink, useParams } from "react-router-dom";
import ImageUploader from "@/components/ImageUploder/ImageUploader";
import Button from "@/components/common/Button";
import { LoadingDashed } from "react-huge-icons/outline";
import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch, useAppSelector } from "@/redux/Hook";
import React, { useEffect, useCallback, useState } from "react";
import Input from "@/components/common/Input";
import { useFormik, FormikProps } from "formik";
import { ProjectAddFormValues } from "@/Types/Pages";
import * as Yup from "yup";
import { onSubmitFormik } from "@/Types/Services";
import { useNavigate } from "react-router-dom";
import {
	allowedLoading,
	disAllowedLoading,
} from "@/redux/Loading/LoadingSlice";
import { Color } from "@/Global/Global";
import GetProjectSingleRequest from "@/services/Projects/GetSingleProject";
import CheckBoxInput from "@/components/common/CheckBoxInpot";
import { CheckBoxInputItemInterface } from "@/Types/Components";
import { getAsyncSkills } from "@/redux/Skills/SkillsSlice";
import ProjectEditRequest from "@/services/Projects/ProjectEdit";

function ProjectEdit(props: any) {
	const [projectData, setProjectData] = useState<ProjectAddFormValues>();
	const [skillsData, setSkillsData] = useState<CheckBoxInputItemInterface[]>();
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { skillsItem } = useAppSelector(state => state.skills);

	const getData = () => {
		dispatch(allowedLoading());

		dispatch(getAsyncSkills());

		GetProjectSingleRequest({ id })
			.then(data => {
				dispatch(disAllowedLoading());
				setProjectData(data);
			})
			.catch(err => {
				console.error(err);
				dispatch(disAllowedLoading());
			});
	};

	const onSubmit = useCallback(
		(values: ProjectAddFormValues, { setSubmitting }: onSubmitFormik) => {
			ProjectEditRequest({ id, values })
				.then(data => {
					setSubmitting(false);
					dispatch(allowedLoading());
					navigate("/projects");
				})
				.catch(err => {
					console.error(err);
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
			initialValues: projectData || initialValues,
			onSubmit,
			validationSchema,
			enableReinitialize: true,
		});

	useEffect(() => {
		dispatch(
			newTitle(`ویرایش پروژه ${projectData?.title ? projectData.title : ""}`),
		);
	}, [projectData?.title]);

	useEffect(() => {
		getData();
	}, []);

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

	return (
		<>
			<div className="flex items-center justify-between w-full gap-6 bg-white p-3 rounded-lg shadow mb-7">
				<p>میخواهید پروژه جدید اضافه کنید؟</p>
				<NavLink to="/project/add">
					<Button
						text="افزودن مهارت جدید"
						width="w-auto"
						color={Color.primary}
					/>
				</NavLink>
			</div>
			<div>
				<form
					onSubmit={formik.handleSubmit}
					className="flex flex-wrap w-full items-start justify-between"
					encType="multipart/form-data">
					<div className="flex flex-col w-full md:w-[48%] xl:w-[65%] gap-6 bg-white p-3 rounded-lg shadow">
						<h2 className="w-full text-lg font-bold">اطلاعات جدید مهارت</h2>
						<Input name="title" label="نام پروژه" formik={formik} />
						<Input name="descriptin" label="توضیحات پروژه" formik={formik} />
						{!!skillsData?.length && (
							<CheckBoxInput
								name="skills"
								lableFiled="مهارت ها"
								formik={formik}
								checkboxData={skillsData}
							/>
						)}
						<Button
							type="submit"
							className="w-36"
							disabled={!formik.isValid || formik.isSubmitting}>
							{formik.isSubmitting ? (
								<LoadingDashed className="w-6 h-6 animate-spin" />
							) : (
								"ثبت تغییرات"
							)}
						</Button>
					</div>

					<div className="flex flex-col w-full md:w-[48%] xl:w-[33%] gap-6">
						<div className="bg-white p-3 rounded-lg shadow">
							<ImageUploader formik={formik} isEditPage={true} />
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
export default React.memo(ProjectEdit);
