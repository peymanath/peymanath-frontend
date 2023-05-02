import { ThreeDots } from "react-loader-spinner";

export const LoadingWrapper = () => {
	return (
		<div
			id="loading"
			className="fixed w-[100vw] h-[100vh] inset-0 flex items-center justify-center backdrop-blur-sm bg-white/10">
			<ThreeDots
				height={"100"}
				width={"100"}
				radius="9"
				color="#10A19D"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				visible={true}
			/>
		</div>
	);
};
