import { ImageUploaderItem } from "@/Types/Components";
import Button from "../common/Button";
import { useState, useRef, useCallback, DragEvent, useEffect } from "react";
import DisplayImageUploader from "./DisplayImageUploader";
import PopUpImageUploader from "./PopUpImageUploader";
import React from "react";

function ImageUploader({ formik, isEditPage = false }: ImageUploaderItem) {
	const [showAddSection, setShowAddSection] = useState<boolean>(false);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [image, setImage] = useState<any>();
	const uploderInput = useRef<HTMLInputElement | null>(null);
	const allowedFileType = ["webp", "png", "jpeg", "svg"];

	const renderImage = useCallback(
		(files: File) => {
			if (!allowedFileType.includes(files.type.replace("image/", ""))) {
				return;
			} else {
				const reader = new FileReader();
				reader.readAsDataURL(files);
				reader.onload = () => {
					formik.setFieldValue("thumbnail", files);
					setImage(reader.result);
				};
			}
		},
		[allowedFileType, image],
	);

	const addImage = useCallback(() => {
		setShowAddSection(false);
	}, [showAddSection, image]);

	const removeImage = useCallback(() => {
		setImage(null);

		formik.setFieldValue("thumbnail", null);

		setShowAddSection(false);
	}, [showAddSection]);

	const inputUploader = useCallback((e: React.BaseSyntheticEvent) => {
		const files = e.currentTarget.files[0];
		files && renderImage(files);
		e.target.value = null;
	}, []);

	const handleDragEnter = useCallback(
		(e: DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			setIsDragging(true);
		},
		[isDragging],
	);

	const handleDragLeave = useCallback(
		(e: any) => {
			e.preventDefault();
			if (e.currentTarget.contains(e.relatedTarget)) return;
			setIsDragging(false);
		},
		[isDragging],
	);

	const handleDragOver = useCallback(
		(e: DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.dataTransfer.dropEffect = "copy";
		},
		[isDragging],
	);

	const handleDrop = useCallback(
		(e: DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			setIsDragging(false);
			const files = e.dataTransfer.files[0];
			files && renderImage(e.dataTransfer.files[0]);
		},
		[isDragging],
	);

	useEffect(() => {
		if (isEditPage) {
			formik.setFieldValue("thumbnail", formik.values.thumbnail);
			setImage(formik.values.thumbnail);
		}
	}, [formik.values.thumbnail]);

	return (
		<div>
			<div className="flex flex-col gap-5 w-full">
				<h2 className="w-full text-lg font-bold">تصویر بندانگشتی</h2>
				<DisplayImageUploader
					onDragEnter={handleDragEnter}
					onDragLeave={handleDragLeave}
					onDragOver={handleDragOver}
					onDrop={handleDrop}
					isDragging={isDragging}
					removeImage={removeImage}
					image={image}
					setShowAddSection={setShowAddSection}
				/>
				<div className="flex flex-col gap-3 items-center justify-between">
					<input
						type="file"
						name="thumbnail"
						className="hidden"
						accept={`/${allowedFileType.join(",image/")}`}
						onChange={inputUploader}
						ref={uploderInput}
					/>
					<Button
						text="افزودن عکس"
						className="w-full block"
						onClick={() => setShowAddSection(true)}
					/>
				</div>
			</div>
			<PopUpImageUploader
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				isDragging={isDragging}
				removeImage={removeImage}
				image={image}
				setShowAddSection={setShowAddSection}
				showAddSection={showAddSection}
				uploderInput={uploderInput}
				allowedFileType={allowedFileType}
				addImage={addImage}
			/>
		</div>
	);
}
export default React.memo(ImageUploader);
