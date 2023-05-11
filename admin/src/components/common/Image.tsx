import { ImageType } from "@/Types/Components";

export default function ImageSite({
	width,
	height,
	src,
	alt,
	className,
}: ImageType) {
	const ImageURL = `http://localhost:2958${src}`;
	return (
		<img
			width={width}
			height={height}
			src={ImageURL}
			alt={alt}
			className={className}
		/>
	);
}
