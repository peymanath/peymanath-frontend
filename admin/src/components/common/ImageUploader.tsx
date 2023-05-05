import { ImageUploaderItem } from "@/types/components";
import Button from "./Button";
import { useState, useRef, DragEvent } from "react";
import PopUp from "./PopUp";
import { ImageAdd, RemoveThin } from "react-huge-icons/outline";

export default function ImageUploader({ formik }: ImageUploaderItem) {
	const [showAddSection, setShowAddSection] = useState<boolean>(false);
	const [isDragging, setIsDragging] = useState(false);
	const [imageFile, setImageFile] = useState<File>();
	const uploderInput = useRef<HTMLInputElement>(null);
	const [image, setImage] = useState<any>("");
	const allowedFileType = ["webp", "png", "jpg"];

	const renderImage = (files: File) => {
		if (!allowedFileType.includes(files.type.replace("image/", ""))) {
			return;
		} else {
			setImageFile(files);
			const reader = new FileReader();
			reader.readAsDataURL(files);
			reader.onload = () => setImage(reader.result);
		}
	};

	const addImage = () => {
		formik.setFieldValue("thumbnail", imageFile);
		setShowAddSection(!showAddSection);
	};

	const removeImage = () => {
		setImage(null);
		formik.setFieldValue("thumbnail", null);
		setShowAddSection(false);
	};

	const inputUploader = (e: React.BaseSyntheticEvent) => {
		const files = e.currentTarget.files[0];
		files && renderImage(files);
		e.target.value = null;
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
				<h2 className="w-full text-lg font-bold">
					تصویر بندانگشتی
				</h2>
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
									onClick={removeImage}>
									<RemoveThin className="w-5 h-5" />
								</div>
								<img src={image && image} className="w-full h-full" />
							</div>
						</div>
					) : (
						<div
							className="flex flex-col gap-3 items-center justify-center border-2 border-dashed border-primary p-3 rounded-lg w-full h-full opacity-50 cursor-pointer text-primary"
							onClick={() => setShowAddSection(!showAddSection)}>
							<ImageAdd className="w-20 h-20" />
							<p className="text-center"> ای دوست، عکس زیبایی را روی من بنهاد :)</p>
						</div>
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
					<Button text="انتخاب از گالری" className="w-36" />
				</div>

				<div className="w-full py-20 h-full">
					<div
						className={`w-full flex items-center justify-between border-2 border-dashed h-40 rounded-md border-primary text-primary mb-3 text-2xl font-bold ${
							isDragging && "bg-primary/10"
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
		</div>
	);
}
