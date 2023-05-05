import { ButtonType } from "@/types/components";
import style from "styled-components";

const ButtonStyled = style.button`
background-color: ${({ color }) => color};
border-color: ${({ color }) => color};
color: #fff;
box-shadow:0 0 14px 0px ${({ color }) => color}73;
`;

export default function Button({
	text,
	color,
	type = "button",
	children,
	onClick,
}: ButtonType) {
	const classButton = "border-primary bg-primary shadow-buttonPrimary";

	return (
		<ButtonStyled
			color={color}
			className={`flex items-center justify-center w-full cursor-pointer py-2 px-5 text-center rounded-md border duration-300 hover:opacity-70 font-bold ${
				!color && classButton
			}`}
			onClick={onClick}
			type={type}>
			{text || children}
		</ButtonStyled>
	);
}
