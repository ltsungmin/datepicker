import styled from "styled-components";
import { CalendarButton } from "../ButtonBase/index";
import {
	COLOR_WHITE,
	COLOR_BLACK,
	COLOR_GRAY,
	COLOR_DISABLED,
	COLOR_YELLOW,
	COLOR_BLUE,
} from "../../../constants/theme";

export const StyledDayButton = styled(CalendarButton)<{ variant: string }>`
	color: ${({ variant }) => {
		switch (variant) {
			case "today":
				return COLOR_BLACK;
			case "selected":
				return COLOR_WHITE;
			case "disabled":
				return COLOR_DISABLED;
			default:
				return COLOR_BLACK;
		}
	}};
	background-color: ${({ variant }) => {
		switch (variant) {
			case "today":
				return COLOR_YELLOW;
			case "selected":
				return COLOR_BLUE;
			case "disabled":
				return COLOR_WHITE;
			default:
				return COLOR_WHITE;
		}
	}};
	cursor: ${({ variant }) =>
		variant === "disabled" ? "not-allowed" : "pointer"};
	&:hover {
		background-color: ${({ variant }) =>
			variant === "default" ? COLOR_GRAY : ""};
	}
	&:active {
		background-color: ${({ variant }) =>
			variant === "default" ? COLOR_BLUE : ""};
	}
`;
