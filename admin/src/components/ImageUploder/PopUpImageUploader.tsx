import PopUp from "../common/PopUp";
import { RemoveThin } from "react-huge-icons/outline";
import Button from "../common/Button";
import { PopUpImageUploaderInterface } from "@/types/components";
import React from 'react';

function PopUpImageUploader({
	isDragging,
	removeImage,
	image,
	setShowAddSection,
	showAddSection,
    allowedFileType,
    uploderInput,
    addImage,
	...props
}: PopUpImageUploaderInterface) {
	return (
		<PopUp action={showAddSection} setAction={setShowAddSection}>
			<div className="absolute top-5 left-3">
				<Button text="انتخاب از گالری" className="w-36" />
			</div>

			<div className="w-full py-20 h-full">
				<div
					className={`w-full flex items-center justify-between border-2 border-dashed h-40 rounded-md border-primary text-primary mb-3 text-2xl font-bold ${
						isDragging && "bg-primary/10"
					}`}
					{...props}>
					<p
						className={`flex items-center justify-center  cursor-pointer ${
							!isDragging && image ? "w-1/2" : "w-full"
						}`}
						onClick={() => uploderInput.current?.click()}>
						{isDragging
							? "تصویر خود را اینجا رها کنید"
							: image
							? "آپدیت عکس جدید"
							: "افزودن عکس جدید"}
					</p>
					{!isDragging && image && (
						<div className="flex items-center justify-center w-1/2">
							<div className="relative w-32 rounded-lg border-2 border-primary/30">
								<div
									className="absolute -top-3 -left-3 flex gap-1 items-center justify-between bg-red-500 text-white rounded-full p-0.5 select-none cursor-pointer"
									onClick={removeImage}>
									<RemoveThin className="w-5 h-5" />
								</div>
								<img src={image && image} className="w-full h-full" />
							</div>
						</div>
					)}
				</div>

				<div>
					<p className="text-base font-bold">
						تصویر خود را داخل کادر بکشید یا روی کادر کلیک کنید. فرمت های قابل
						قبول:{" "}
						<span className="text-primary">{allowedFileType.join(", ")}</span>
					</p>
				</div>
			</div>

			<div className="flex flex-wrap items-center justify-between">
				<Button
					text="لغو افزودن عکس"
					width="w-auto"
					color="#d00000"
					onClick={removeImage}
				/>
				<Button
					text="قرار دادن عکس"
					width="w-auto"
					color="#29bf12"
					onClick={addImage}
				/>
			</div>
		</PopUp>
	);
}

export default React.memo(PopUpImageUploader);
