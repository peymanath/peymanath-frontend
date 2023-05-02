import { ImageType } from "@/types/components";

export default function Image({
	width,
	height,
	src,
	alt,
	...props
}: ImageType): JSX.Element {
	return <img width={width} height={height} src={src} alt={alt} {...props} />;
}
