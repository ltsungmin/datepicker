import styled from "styled-components";
import { COLOR_WHITE, COLOR_BLACK, COLOR_GRAY } from "../../../constants/theme";

export const ButtonBase = styled.button`
	border: none;
	background: ${COLOR_WHITE};
	cursor: pointer;
	padding: 9px 10px;
	border-radius: 2px;
	transition: all 300ms;
	&:hover {
		background-color: ${COLOR_GRAY};
	}
`;

export const CalendarButton = styled.button`
	padding: 8px 8px;
	cursor: pointer;
	color: ${COLOR_BLACK};
	border: none;
	transition: all 0.2s ease-in-out;
`;
