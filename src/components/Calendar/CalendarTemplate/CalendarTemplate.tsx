import React from "react";
import CalendarMonth from "../CalendarMonth/CalendarMonth";
import { CalendarTemplateProps } from "../../../type/index"

function CalendarTemplate(props: CalendarTemplateProps) {
	const { currentDate, setCurrentDate } = props;
	const [startDate, setStartDate] = React.useState<{
		year: number;
		month: number;
		date: number;
	} | null>(null);
	const [endDate, setEndDate] = React.useState<{
		year: number;
		month: number;
		date: number;
	} | null>(null);

	return (
		<div>
			<CalendarMonth
				currentDate={currentDate}
				setCurrentDate={setCurrentDate}
				startDate={startDate}
				setStartDate={setStartDate}
				endDate={endDate}
				setEndDate={setEndDate}
			/>
		</div>
	);
}

export default CalendarTemplate;
