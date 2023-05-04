import { ButtonType } from "@/types/components";
import style from "styled-components";

const ButtonStyled = style.span`
background-color: ${({ color }) => color};
border-color: ${({ color }) => color};
color: #fff;
&:hover {
    background-color: transparent;
    color: ${({ color }) => color};
  }
`;

export default function Button({ text, color, onClick }: ButtonType) {
	const classButton =
		"border-primary bg-primary hover:bg-transparent hover:text-primary";

	return (
		<ButtonStyled
			color={color}
			className={`cursor-pointer py-2 px-5 text-center rounded-md border duration-300 ${
				!color && classButton
			}`}
			onClick={onClick}>
			{text}
		</ButtonStyled>
	);
}
