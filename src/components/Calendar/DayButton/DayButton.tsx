import { StyledDayButton } from "./styles";
import { DayButtonProps } from "../../../type/index"

function DayButton({
	day,
	variant = "default",
	onClick,
	disabled = false,
}: DayButtonProps) {
	return (
		<StyledDayButton
			variant={variant}
			onClick={!disabled ? onClick : undefined}
			disabled={disabled}
		>
			{day}日
		</StyledDayButton>
	);
}

export default DayButton;
