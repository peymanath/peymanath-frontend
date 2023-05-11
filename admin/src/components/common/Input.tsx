import { InputItem } from "@/Types/Components";

export default function Input({
	label,
	formik,
	name,
	type = "text",
}: InputItem) {
	return (
		<div className="flex flex-col gap-y-2 w-full">
			<label htmlFor={name} className="flex flex-wrap gap-3 pr-1">
				<span>{label}</span>
				{formik.errors[name] && formik.touched[name] && (
					<span className="text-red-500">
						{"(" + formik.errors[name] + ")"}
					</span>
				)}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				className={`border ${
					formik.errors[name] && formik.touched[name] ? "border-red-500" : "border-gray-200"
				} rounded-md py-2 px-5 w-full`}
				{...formik.getFieldProps(name)}
			/>
		</div>
	);
}
