export interface DateType {
	year: number;
	month: number;
	date: number;
}

export interface CalendarTemplateProps {
	currentDate: DateType;
	setCurrentDate: (date: DateType) => void;
}

export interface CalendarHeaderProps {
	currentDate: DateType;
	handlePrevMonth: (date: DateType) => void;
	handleNextMonth: (date: DateType) => void;
}

export interface DayButtonProps {
	day: number;
	variant?: "default" | "today" | "selected" | "disabled";
	onClick?: () => void;
	disabled?: boolean;
}
