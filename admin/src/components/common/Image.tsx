import { ImageType } from "@/types/components";

export default function Image({
	width,
	height,
	src,
	alt,
	...props
}: ImageType): JSX.Element {
	const ImageURL = require(`../../../public/image/${src}`);
	return (
		<img width={width} height={height} src={ImageURL} alt={alt} {...props} />
	);
}
