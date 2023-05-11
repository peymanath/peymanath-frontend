import ImageUploader from "@/components/ImageUploder/ImageUploader";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { Color } from "@/Global/Global";
import { SkillFormComponentInterface } from "@/Types/Pages";
import { LoadingDashed } from "react-huge-icons/outline";
import { NavLink } from "react-router-dom";

function FormSkill({ formik, dataPage }: SkillFormComponentInterface) {
	return (
		<>
			<div className="flex items-center justify-between w-full gap-6 bg-white p-3 rounded-lg shadow mb-7">
				<p>{dataPage.headerDesciption}</p>
				<NavLink to={dataPage.headerUrl}>
					<Button
						text={dataPage.headerTitle}
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
						<h2 className="w-full text-lg font-bold">{dataPage.formTitle}</h2>
						<Input name="titleFa" label="نام مهارت به فارسی" formik={formik} />
						<Input
							name="titleEn"
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
								dataPage.formSubmit
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

export default FormSkill;
