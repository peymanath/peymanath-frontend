export interface ImageType {
	width: number;
	height: number;
	src: string;
	alt: string;
	className?: string;
	title?: string;
}

export interface InputItem {
	label: string;
	name: string;
	formik: any;
	type?: string;
	placeholder?: string;
}

export interface ImageUploaderItem {
	formik: any;
}

export type ButtonType = {
	text: string | JSX.Element;
	color?: string;
	className?: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
