import LoginStyle from "@/pages/login/login.module.css";
import { User } from "react-huge-icons/outline";
import Input from "@/components/common/Input";
import { useFormik, FormikProps } from "formik";
import { LoginFormValues } from "@/types/pages";
import * as Yup from "yup";
import LoginRequest from "@/services/auth/login";
import { useHeader } from "@/context/HeaderProvider";
import { useLoading } from "@/context/LoadingProvider";

export default function Login() {
	const { header, setHeader } = useHeader();
	const { setIsLoading } = useLoading();
	const onSubmit = (values: LoginFormValues) => {
		setIsLoading(true);
		LoginRequest({ values }).then((res: any) => {
			setHeader({ ...header, ...res.data });
			setIsLoading(false);
		});
	};
	const validationSchema = Yup.object({
		username: Yup.string().required("نام کاربری ضروری است."),
		password: Yup.string().required("رمزعبور ضروری است."),
	});
	const initialValues: LoginFormValues = {
		username: "kminchelle",
		password: "0lelplR",
	};
	const formik: FormikProps<LoginFormValues> = useFormik<LoginFormValues>({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<main className="h-[100vh]">
			<div
				className={`absolute bg-hero-section inset-0 -z-50 ${LoginStyle.image}`}></div>
			<div className="flex flex-col justify-center items-center gap-y-8 max-w-[300px] sm:max-w-[358px] mx-auto h-full">
				<div className="flex flex-col items-center gap-y-3">
					<div className="bg-primary p-2 rounded-md text-white">
						<User className="w-12 h-12" />
					</div>
					<div className="text-secondary font-bold text-xl">
						<p>وارد حساب کاربری خود شوید</p>
					</div>
				</div>
				<form
					onSubmit={formik.handleSubmit}
					className="flex flex-col items-center gap-y-6 w-full">
					<div className="flex flex-col gap-y-2 w-full">
						<Input name="username" label="ایمیل" formik={formik} />
						<Input
							name="password"
							type="password"
							label="رمزعبور"
							formik={formik}
						/>
					</div>

					<div className="flex w-full">
						<button
							type="submit"
							className="bg-primary text-white w-full h-full py-2 px-5 border border-primary rounded-md duration-300 hover:bg-white hover:text-primary">
							ورود به سایت
						</button>
					</div>
				</form>
			</div>
		</main>
	);
}
