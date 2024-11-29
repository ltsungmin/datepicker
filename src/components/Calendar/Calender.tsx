import React from "react";
import CalendarTemplate from "./CalendarTemplate/CalendarTemplate";

import { TODAY_DATA } from "../../constants/date";

function Calender() {
	const [currentDate, setCurrentDate] = React.useState(TODAY_DATA);

	return (
		<CalendarTemplate
			currentDate={currentDate}
			setCurrentDate={setCurrentDate}
		/>
	);
}

export default Calender;
