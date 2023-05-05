import { RemoveThin } from "react-huge-icons/outline";

export default function PopUp({
	action,
	setAction,
	children,
}: {
	action: boolean;
	setAction: Function;
	children: React.ReactNode;
}) {
	return (
		<>
			<div
				className={`duration-300 flex inset-0 bg-black/50 backdrop-blur-sm z-[998] ${
					action ? "fixed" : "hidden"
				}`}></div>
			<div
				className={`duration-500 flex fixed -translate-y-1/2 right-1/2 translate-x-1/2 w-[90%] lg:w-2/3 bg-white flex-col p-3 rounded-lg overflow-auto z-[999] ${
					action ? "top-1/2" : " -top-1/2"
				}`}>
				<RemoveThin className="absolute top-3 right-3 w-10 h-10" onClick={() => setAction(!action)} />
				{children}
			</div>
		</>
	);
}
