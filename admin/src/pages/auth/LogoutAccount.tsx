import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useHeader } from "@/context/HeaderProvider";
import { useLoading } from "@/context/LoadingProvider";
import { useNavigate } from "react-router-dom";

export default function LogoutAccount() {
	const navigate = useNavigate();
	const { header, setHeader } = useHeader();
	const { globalStore, setGlobalStore } = useGlobalStore();
	const { setIsLoading } = useLoading();
	const logoutHandler = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setHeader({ ...header, token: "" });
			setGlobalStore({ ...globalStore, isLogin: false });
		}, 2000);
	};
	return (
		<div className="flex flex-col items-center justify-between bg-red-50 text-red-950 min-h-[100px] p-3 rounded-lg shadow shadow-red-100">
			<h2 className="text-3xl py-5">
				آیا میخواهید از حساب کاربری خود خارج شوید؟
			</h2>

			<div className="flex gap-5 items-center">
				<span
					className="cursor-pointer w-20 py-2 px-5 text-center rounded-lg border-2 border-red-600 bg-red-600 text-white hover:bg-transparent hover:text-red-600 duration-300"
					onClick={logoutHandler}>
					بله
				</span>
				<span
					className="cursor-pointer w-20 py-2 px-5 text-center rounded-lg border-2 border-green-600 bg-green-600 text-white hover:bg-transparent hover:text-green-600 duration-300"
					onClick={() => navigate("/")}>
					خیر
				</span>
			</div>
		</div>
	);
}
