export default function PopUp({
	action,
	children,
}: {
	action: boolean;
	children: React.ReactNode;
}) {
	return (
		<>
			<div
				className={`duration-300 flex inset-0 bg-black/50 backdrop-blur-sm ${
					action ? "fixed" : "hidden"
				}`}></div>
			<div
				className={`duration-500 flex fixed -translate-y-1/2 right-1/2 translate-x-1/2 w-2/3 h-2/3 bg-white flex-col p-3 rounded-lg ${
					action ? "top-1/2" : "-top-1/2"
				}`}>
				{children}
			</div>
		</>
	);
}
