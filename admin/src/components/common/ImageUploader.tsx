import { ImageUploaderItem } from "@/types/components";
import Button from "./Button";
import { useState, useRef } from "react";
import PopUp from "./PopUp";

export default function ImageUploader({ formik }: ImageUploaderItem) {
	const [showAddSection, setShowAddSection] = useState<boolean>(false);
	const uploderInput = useRef<HTMLInputElement>(null);
	const allowedFileType = ["webp", "png", "jpg"];
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
				<div className="absolute top-5 left-3">
					<Button
						text="انتخاب از گالری"
						className="w-36"
						onClick={() => setShowAddSection(!showAddSection)}
					/>
				</div>
				<div className="w-full pt-14 h-full">
					<div
						className="w-full flex items-center justify-center border-2 border-dashed h-1/3 rounded-md border-primary text-primary mb-3 text-2xl font-bold"
						onClick={() => uploderInput.current?.click()}>
						افزودن عکس جدید
					</div>
					<p className="text-lg">
						برای افزودن تصویر جدید، روی کادر بالا کلیک کنید. فرمت های قابل قبول:
						{" "}
						<span className="text-primary">{allowedFileType.join(",")}</span>
					</p>
					<input
						type="file"
						className="hidden"
						accept={`image/${allowedFileType.join(",image/")}`}
						ref={uploderInput}
					/>
				</div>
			</PopUp>
		</div>
	);
}
