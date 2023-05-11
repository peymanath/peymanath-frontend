import { useParams } from "react-router-dom";
import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/Hook";
import React, { useEffect, useCallback, useState } from "react";
import { useFormik, FormikProps } from "formik";
import {
	SkillFormComponenItemtInterface,
	SkillsAddFormValues,
} from "@/Types/Pages";
import { onSubmitFormik } from "@/Types/Services";
import { useNavigate } from "react-router-dom";
import {
	allowedLoading,
	disAllowedLoading,
} from "@/redux/Loading/LoadingSlice";
import GetSkillSingleRequest from "@/services/Skills/GetSingleSkill";
import SkillEditRequest from "@/services/Skills/SkillEdit";
import { initialValuesSkill, validationSchemaSkill } from "./FormConfigSkill";
import FormSkill from "./FormSkill";

function SkillsEdit() {
	const [skillsData, setSkillsData] = useState<SkillsAddFormValues>();
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const getData = () => {
		dispatch(allowedLoading());
		GetSkillSingleRequest({ id })
			.then(data => {
				setSkillsData(data);
				dispatch(disAllowedLoading());
			})
			.catch(err => {
				console.error(err);
				dispatch(disAllowedLoading());
			});
	};

	useEffect(() => {
		dispatch(
			newTitle(`ویرایش مهارت ${skillsData?.titleEn ? skillsData.titleEn : ""}`),
		);
	}, [skillsData?.titleEn]);

	useEffect(() => {
		getData();
	}, []);

	const onSubmit = useCallback(
		(values: SkillsAddFormValues, { setSubmitting }: onSubmitFormik) => {
			SkillEditRequest({ id, values })
				.then(data => {
					setSubmitting(false);
					dispatch(allowedLoading());
					navigate("/skills");
				})
				.catch(err => {
					console.error(err);
					dispatch(disAllowedLoading());
				});
		},
		[],
	);

	const formik: FormikProps<SkillsAddFormValues> =
		useFormik<SkillsAddFormValues>({
			initialValues: skillsData || initialValuesSkill,
			onSubmit,
			validationSchema: validationSchemaSkill,
			enableReinitialize: true,
		});

	const dataPage: SkillFormComponenItemtInterface = {
		headerDesciption: "میخواهید مهارت جدید اضافه کنید؟",
		headerTitle: "افزودن مهارت جدید",
		headerUrl: "/skill/add",
		formTitle: "اطلاعات جدید مهارت",
		formSubmit: "ثبت تغییرات",
	};

	return <FormSkill formik={formik} dataPage={dataPage} />;
}

export default React.memo(SkillsEdit);
