import { ImageUploaderItem } from "@/types/components";
import Button from "./Button";
import { useState, useRef, DragEvent } from "react";
import PopUp from "./PopUp";
import { ImageAdd, RemoveThin } from "react-huge-icons/outline";
import { replace } from "formik";

export default function ImageUploader({ formik }: ImageUploaderItem) {
	const [showAddSection, setShowAddSection] = useState<boolean>(false);
	const [isDragging, setIsDragging] = useState(false);
	const uploderInput = useRef<HTMLInputElement>(null);
	const allowedFileType = ["webp", "png", "jpg"];

	const [image, setImage] = useState<any>("");

	const renderImage = (files: File) => {
		if (!allowedFileType.includes(files.type.replace("image/", ""))) {
			return;
		} else {
			formik.setFieldValue("thumbnail", files);
			const reader = new FileReader();
			reader.readAsDataURL(files);
			reader.onload = () => setImage(reader.result);
		}
	};
	const inputUploader = (e: React.BaseSyntheticEvent) => {
		const files = e.currentTarget.files[0];
		files && renderImage(files);
	};
	const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = (e: any) => {
		e.preventDefault();
		if (e.currentTarget.contains(e.relatedTarget)) return;
		setIsDragging(false);
	};

	const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = "copy";
	};

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(false);
		const files = e.dataTransfer.files[0];
		files && renderImage(e.dataTransfer.files[0]);
	};
	return (
		<div>
			<div className="flex flex-col gap-5 w-full">
				<label
					htmlFor="thumbnail"
					className="w-full text-gray-800 font-bold pr-1">
					تصویر بندانگشتی
				</label>
				<div
					className="flex items-center justify-start"
					onDragEnter={handleDragEnter}
					onDragLeave={handleDragLeave}
					onDragOver={handleDragOver}
					onDrop={handleDrop}>
					{!isDragging && image ? (
						<div className="flex items-center justify-center w-32">
							<div className="relative w-full rounded-lg border-2 border-primary/30">
								<div
									className="absolute -top-3 -left-3 flex gap-1 items-center justify-between bg-red-500 text-white rounded-full p-0.5 select-none cursor-pointer"
									onClick={() => setImage(null)}>
									<RemoveThin className="w-5 h-5" />
								</div>
								<img src={image && image} className="w-full h-full" />
							</div>
						</div>
					) : (
						<ImageAdd
							className="flex items-center justify-center border-2 border-dashed p-3 rounded-lg w-32 h-32 text-gray-600/50"
							onClick={() => setShowAddSection(!showAddSection)}
						/>
					)}
				</div>
				<div className="flex flex-col gap-3 items-center justify-between">
					<input
						type="file"
						name="thumbnail"
						className="hidden"
						accept={`image/${allowedFileType.join(",image/")}`}
						onChange={inputUploader}
						ref={uploderInput}
					/>
					<Button
						text="افزودن عکس"
						className="w-full block"
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
						className={`w-full flex items-center justify-between border-2 border-dashed h-40 rounded-md border-primary text-primary mb-3 text-2xl font-bold ${
							isDragging && "bg-slate-300"
						}`}
						onDragEnter={handleDragEnter}
						onDragLeave={handleDragLeave}
						onDragOver={handleDragOver}
						onDrop={handleDrop}>
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
										onClick={() => setImage(null)}>
										<RemoveThin className="w-5 h-5" />
									</div>
									<img src={image && image} className="w-full h-full" />
								</div>
							</div>
						)}
					</div>

					<p className="text-lg">
						تصویر خود را داخل کادر بکشید یا روی کادر کلیک کنید. فرمت های قابل
						قبول:{" "}
						<span className="text-primary">{allowedFileType.join(", ")}</span>
					</p>
				</div>
			</PopUp>
		</div>
	);
}
