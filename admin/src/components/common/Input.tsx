import { InputItem } from "@/types/components";

export default function Input({
	label,
	formik,
	name,
	type = "text",
}: InputItem) {
	return (
		<div className="flex flex-col gap-y-2 w-full">
			<label htmlFor={name} className="pr-1">
				{label}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				className="border border-gray-200 rounded-md py-2 px-5 w-full"
				{...formik.getFieldProps(name)}
			/>
			{formik.errors[name] && formik.touched[name] && (
				<p className="text-red-500">{formik.errors[name]}</p>
			)}
		</div>
	);
}
