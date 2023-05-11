import {
	CheckBoxInputInterface,
	CheckBoxInputItemInterface,
} from "@/Types/Components";
function CheckBoxInput({
	lableFiled,
	name,
	formik,
	checkboxData,
}: CheckBoxInputInterface) {
	return (
		<div
			className={`flex flex-col border rounded-lg gap-5 ${
				formik.errors[name] && formik.touched[name]
					? "border-red-500"
					: "border-gray-200"
			} rounded-md py-2 w-full`}>
			<div className="flex flex-wrap gap-3 pr-2">
				<span>{lableFiled}</span>
				{formik.errors[name] && formik.touched[name] && (
					<span className="text-red-500">
						{"(" + formik.errors[name] + ")"}
					</span>
				)}
			</div>
			<div className="px-5">
				{!!checkboxData &&
					checkboxData.map(({ value, lable }: CheckBoxInputItemInterface) => (
						<div key={value} className="flex items-center gap-1">
							<input
								name={name}
								id={`item-${value}`}
								value={value}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								checked={formik.values[name].includes(value)}
								type="checkbox"
							/>

							<label htmlFor={`item-${value}`}>{lable}</label>
						</div>
					))}
			</div>
		</div>
	);
}

export default CheckBoxInput;
