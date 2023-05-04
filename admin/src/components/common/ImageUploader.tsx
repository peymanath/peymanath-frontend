import { ImageUploaderItem } from "@/types/components";
import Button from "./Button";
import { useState } from "react";
import PopUp from "./PopUp";

export default function ImageUploader({ formik }: ImageUploaderItem) {
	const [showAddSection, setShowAddSection] = useState<boolean>(false);
	return (
		<div>
			<div className="flex flex-col gap-2 w-full">
				<label
					htmlFor="thumbnail"
					className="w-full text-gray-800 font-bold pr-1">
					تصویر بندانگشتی
				</label>
				<div className="flex flex-1 gap-3 items-center justify-between">
					<input
						id="thumbnail"
						name="thumbnail"
						type="text"
						className="flex-1 border border-gray-200 rounded-md py-2 px-5 w-2/3"
						{...formik.getFieldProps("thumbnail")}
					/>
					<Button
						text="افزودن عکس"
						className="w-1/3"
						onClick={() => setShowAddSection(!showAddSection)}
					/>
				</div>
			</div>
			<PopUp action={showAddSection} setAction={setShowAddSection}>
				<p>سکشن مربوط به افزودن تصویر</p>
			</PopUp>
		</div>
	);
}
