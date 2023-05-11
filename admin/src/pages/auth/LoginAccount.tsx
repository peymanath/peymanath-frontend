import LoginStyle from "./login.module.css";
import { User } from "react-huge-icons/outline";
import Input from "@/components/common/Input";
import { useFormik, FormikProps } from "formik";
import { LoginFormValues } from "@/Types/Pages";
import * as Yup from "yup";
import LoginRequest from "@/services/Auth/Login";
import {
	allowedLoading,
	disAllowedLoading,
} from "@/redux/Loading/LoadingSlice";
import { useAppDispatch } from "@/redux/Hook";
import { addToken } from "@/redux/AccessToken/AccessTokenSlice";
import { setLoggedIn } from "@/redux/UserLoggedIn/UserLoggedInSlice";

export default function LoginAccount() {
	const dispatch = useAppDispatch();
	const onSubmit = (values: LoginFormValues) => {
		// start loading
		dispatch(allowedLoading());

		// start request
		LoginRequest({ values })
			// end request success
			.then(res => {
				dispatch(addToken(res.data.jwt));
				dispatch(setLoggedIn());
				dispatch(disAllowedLoading());
			})
			// end request has error
			.catch(err => {
				console.log(err);
				dispatch(disAllowedLoading());
			});
	};

	const validationSchema = Yup.object({
		identifier: Yup.string().required("نام کاربری ضروری است."),
		password: Yup.string().required("رمزعبور ضروری است."),
	});
	const initialValues: LoginFormValues = {
		identifier: "",
		password: "",
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
					<div className="text-primary font-bold text-xl">
						<p>وارد حساب کاربری خود شوید</p>
					</div>
				</div>
				<form
					onSubmit={formik.handleSubmit}
					className="flex flex-col items-center gap-y-6 w-full">
					<div className="flex flex-col gap-y-2 w-full">
						<Input name="identifier" label="نام کاربری" formik={formik} />
						<Input
							name="password"
							type="password"
							label="رمزعبور"
							formik={formik}
						/>
						<input type="hidden" name="joinedAt" />
						<input type="hidden" name="active" />
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
