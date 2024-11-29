import { StyledDayButton } from "./styles";
import { DayButtonProps } from "../../../type/index"

function DayButton({
	day,
	variant = "default",
	onClick,
	disabled = false,
	icon,
}: DayButtonProps) {
	return (
		<StyledDayButton
			variant={variant}
			onClick={!disabled ? onClick : undefined}
			disabled={disabled}
		>
			{icon && <span style={{ marginRight: 8 }}>{icon}</span>}
			{day}日
		</StyledDayButton>
	);
}

export default DayButton;
