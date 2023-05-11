import { Color } from "@/Global/Global";
import { ThreeDots } from "react-loader-spinner";

export const LoadingWrapper = () => {
	return (
		<div className="fixed w-[100vw] h-[100vh] inset-0 flex items-center justify-center backdrop-blur-sm bg-white/10 z-[99999999]">
			<ThreeDots color={Color.primary} />
		</div>
	);
};
