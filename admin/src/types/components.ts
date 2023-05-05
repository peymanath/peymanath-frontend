interface ButtonHTMLAttributes<T> {
	autoFocus?: boolean | undefined;
	disabled?: boolean | undefined;
	form?: string | undefined;
	formAction?: string | undefined;
	formEncType?: string | undefined;
	formMethod?: string | undefined;
	formNoValidate?: boolean | undefined;
	formTarget?: string | undefined;
	name?: string | undefined;
	type?: "submit" | "reset" | "button" | undefined;
	value?: string | ReadonlyArray<string> | number | undefined;
}

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
	text?: string | JSX.Element;
	color?: string;
	autoFocus?: boolean | undefined;
	disabled?: boolean | undefined;
	form?: string | undefined;
	formAction?: string | undefined;
	formEncType?: string | undefined;
	formMethod?: string | undefined;
	formNoValidate?: boolean | undefined;
	formTarget?: string | undefined;
	name?: string | undefined;
	type?: "submit" | "reset" | "button" | undefined;
	value?: string | ReadonlyArray<string> | number | undefined;
	className?: string;
	children?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
