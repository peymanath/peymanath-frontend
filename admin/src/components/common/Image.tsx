import { Image } from "@/types/components";

export function Image({ width, height, src, alt, title }: Image) {
	return (
		<img width={width} height={height} src={src} alt={alt} title={title} />
	);
}
