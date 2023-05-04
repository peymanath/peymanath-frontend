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
				className={`duration-300 flex inset-0 bg-black/50 backdrop-blur-sm ${
					action ? "fixed" : "hidden"
				}`}></div>
			<div
				className={`duration-500 flex fixed md:-translate-y-1/2 md:right-1/2 md:translate-x-1/2 md:w-2/3 md:h-2/3 bg-white flex-col p-3 md:rounded-lg ${
					action ? "inset-0 md:top-1/2" : "-top-1/2"
				}`}>
				<RemoveThin className="w-10 h-10" onClick={() => setAction(!action)} />
				{children}
			</div>
		</>
	);
}
