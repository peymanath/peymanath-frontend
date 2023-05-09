import { DisplayImageUploaderInterface } from "@/types/components";
import React, { useMemo } from "react";
import { ImageAdd, RemoveThin } from "react-huge-icons/outline";

function DisplayImageUploader({
	isDragging,
	removeImage,
	image,
	setShowAddSection,
}: DisplayImageUploaderInterface) {
	console.log(image);
	return (
		<div className="flex items-center justify-start">
			{!isDragging && image ? (
				<div className="flex items-center justify-center w-32 min-h-[8rem]">
					<div className="relative flex items-center justify-between p-1 w-full min-h-[8rem] rounded-lg border-2 border-primary/30">
						<div
							className="absolute -top-3 -left-3 flex gap-1 items-center justify-between bg-red-500 text-white rounded-full p-0.5 select-none cursor-pointer"
							onClick={removeImage}>
							<RemoveThin className="w-5 h-5" />
						</div>
						<img src={image && image} className="w-full h-full rounded-lg" />
					</div>
				</div>
			) : (
				<div
					className="flex flex-col gap-3 items-center justify-center border-2 border-dashed border-primary p-3 rounded-lg w-full h-full opacity-50 cursor-pointer text-primary"
					onClick={() => setShowAddSection(true)}>
					<ImageAdd className="w-20 h-20" />
					<p className="text-center"> ای دوست، عکس زیبایی را روی من بنهاد :)</p>
				</div>
			)}
		</div>
	);
}

export default React.memo(DisplayImageUploader);
