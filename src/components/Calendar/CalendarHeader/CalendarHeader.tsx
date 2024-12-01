import {
	ArrowLeftButton,
	ArrowRightButton,
	MouthSelectButton,
	CalenderHeader,
} from "./styles";
import { CalendarHeaderProps } from "../../../type/index";

function CalendarHeader({
	currentDate,
	handlePrevMonth,
	handleNextMonth,
}: CalendarHeaderProps) {
	const { year, month } = currentDate;

	return (
		<CalenderHeader>
			<ArrowLeftButton onClick={handlePrevMonth} />
			<MouthSelectButton>
				{year}年 {month}月
			</MouthSelectButton>
			<ArrowRightButton onClick={handleNextMonth} />
		</CalenderHeader>
	);
}

export default CalendarHeader;
