import { ImageType } from "@/Types/Components";

export default function ImageSite({
	width,
	height,
	src,
	alt,
	className,
}: ImageType) {
	const ImageURL = `${process.env.REACT_APP_API_BASEURL}${src}`;
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
