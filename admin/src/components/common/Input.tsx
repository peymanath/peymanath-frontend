import { InputItem } from "@/types/components";

export default function Input({
	label,
	formik,
	name,
	type = "text",
}: InputItem) {
	return (
		<div className="flex flex-col gap-y-2 w-full">
			<label htmlFor={name} className="text-gray-800 font-bold pr-1">
				{label}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				className="border border-gray-200 rounded-md p-2 text-sm w-full"
				{...formik.getFieldProps(name)}
			/>
			{formik.errors[name] && formik.touched[name] && (
				<p className="text-red-500">{formik.errors[name]}</p>
			)}
		</div>
	);
}
