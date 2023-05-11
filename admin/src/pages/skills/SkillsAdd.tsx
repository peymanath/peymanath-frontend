import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/Hook";
import React, { useEffect, useCallback } from "react";
import { useFormik, FormikProps } from "formik";
import {
	SkillFormComponenItemtInterface,
	SkillsAddFormValues,
} from "@/Types/Pages";
import SkillsAddRequest from "@/services/Skills/SkillAdd";
import { onSubmitFormik } from "@/Types/Services";
import { useNavigate } from "react-router-dom";
import {
	allowedLoading,
	disAllowedLoading,
} from "@/redux/Loading/LoadingSlice";
import { initialValuesSkill, validationSchemaSkill } from "./FormConfigSkill";
import FormSkill from "./FormSkill";

function SkillsAdd() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(newTitle("افزودن مهارت"));
	}, []);

	const onSubmit = useCallback(
		(
			values: SkillsAddFormValues,
			{ setSubmitting, resetForm }: onSubmitFormik,
		) => {
			SkillsAddRequest({ values })
				.then(res => {
					setSubmitting(false);
					resetForm();
					dispatch(allowedLoading());
					setTimeout(() => {
						dispatch(disAllowedLoading());
						navigate("/skills");
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

	const formik: FormikProps<SkillsAddFormValues> =
		useFormik<SkillsAddFormValues>({
			initialValues: initialValuesSkill,
			onSubmit,
			validationSchema: validationSchemaSkill,
		});

	const dataPage: SkillFormComponenItemtInterface = {
		headerDesciption: "میخواهید تمامی مهارت ها را مشاهده کنید؟	",
		headerTitle: "مشاهده مهارت ها",
		headerUrl: "/skills",
		formTitle: "اطلاعات مهارت جدید",
		formSubmit: "افزودن مهارت",
	};

	return <FormSkill formik={formik} dataPage={dataPage} />;
}
export default React.memo(SkillsAdd);
