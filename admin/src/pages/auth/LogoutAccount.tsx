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
		<div className="bg-red-50 min-h-[100px] ">
			<p>آیا مایل به خارج شدن هستید؟</p>

			<p className="cursor-pointer" onClick={logoutHandler}>
				بله
			</p>
			<p className="cursor-pointer" onClick={() => navigate("/")}>
				خیر
			</p>
		</div>
	);
}
