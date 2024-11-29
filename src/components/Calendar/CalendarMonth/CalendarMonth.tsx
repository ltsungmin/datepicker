import React from "react";
import { CalendarContainer } from "../styles";
import {
	getFirstDayOfMonth,
	getLastDayOfMonth,
} from "../../../utils/dateUtils";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import CalendarMonthContent from "../CalendarMonth/styles";
import DayButton from "../DayButton/DayButton";
import { DateType } from "../../../type";

function MonthCalendar(props: any) {
	const {
		currentDate,
		setCurrentDate,
		startDate,
		setStartDate,
		endDate,
		setEndDate,
	} = props;
	const { year: currentYear, month: currentMonth } = currentDate;
	const today = new Date();
	const [, setClickCount] = React.useState(0);

	const getDaysInMonth = (year: number, month: number): number => {
		return new Date(year, month, 0).getDate();
	};
	const daysInMonth = getDaysInMonth(currentYear, currentMonth);
	const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
	const lastDayOfMonth = getLastDayOfMonth(currentYear, currentMonth);

	const handlePrevMonth = () => {
		console.log(currentDate)
		setCurrentDate((prev: DateType) => {
			const prevYear = prev.month === 1 ? prev.year - 1 : prev.year;
			const prevMonth = prev.month === 1 ? 12 : prev.month - 1;

			return { year: prevYear, month: prevMonth, day: 1 };
		});
	};

	const handleNextMonth = () => {
		setCurrentDate((prev: DateType) => {
			const nextYear = prev.month === 12 ? prev.year + 1 : prev.year;
			const nextMonth = prev.month === 12 ? 1 : prev.month + 1;

			return { year: nextYear, month: nextMonth, day: 1 };
		});
	};

	const prevMonthDays = Array.from(
		{ length: firstDayOfMonth },
		(_, i) =>
			getDaysInMonth(currentYear, currentMonth - 1) - firstDayOfMonth + i + 1,
	);

	const nextMonthDays = Array.from(
		{ length: 6 - lastDayOfMonth },
		(_, i) => i + 1,
	);

	const isDateInRange = (
		date: { year: number; month: number; date: number },
		startDate: { year: number; month: number; date: number } | null,
		endDate: { year: number; month: number; date: number } | null,
		currentMonth: number,
		currentYear: number,
	): boolean => {
		if (!startDate) return false;

		const target = new Date(date.year, date.month - 1, date.date).getTime();

		// 僅有 startDate 時
		if (startDate && !endDate) {
			const start = new Date(
				startDate.year,
				startDate.month - 1,
				startDate.date,
			).getTime();
			return (
				target === start &&
				startDate.year === currentYear &&
				startDate.month === currentMonth
			);
		}

		// 完整範圍檢查
		if (startDate && endDate) {
			const start = new Date(
				startDate.year,
				startDate.month - 1,
				startDate.date,
			).getTime();
			const end = new Date(
				endDate.year,
				endDate.month - 1,
				endDate.date,
			).getTime();
			return (
				target >= start &&
				target <= end &&
				date.year === currentYear &&
				date.month === currentMonth
			);
		}

		return false;
	};

	// 如果 EndDate 大於 StartDate，則計數歸零
	const isBefore = (date1: DateType, date2: DateType): boolean => {
		const d1 = new Date(date1.year, date1.month - 1, date1.date).getTime();
		const d2 = new Date(date2.year, date2.month - 1, date2.date).getTime();
		return d1 < d2;
	};

	const handleDateClick = (date: DateType) => {
		setClickCount((prevClickCount) => {
			// 點擊次數在 0-2 間循環
			const newClickCount = (prevClickCount + 1) % 3;

			switch (newClickCount) {
				case 0:
					// 第三次點擊：清空選擇範圍
					resetSelection();
					break;
				case 1:
					// 第一次點擊：設置 startDate
					selectStartDate(date);
					break;
				case 2:
					// 第二次點擊：設置 endDate
					if (startDate && isBefore(date, startDate)) {
						// 如果第二次點擊日期早於第一次，重置選擇
						resetSelection();
						// 歸零點擊次數
						return 0;
					}
					selectEndDate(date);
					break;
				default:
					break;
			}

			return newClickCount;
		});
	};

	const resetSelection = () => {
		setStartDate(null);
		setEndDate(null);
	};

	const selectStartDate = (date: DateType) => {
		setStartDate(date);
		setEndDate(null);
	};

	const selectEndDate = (date: DateType) => {
		setEndDate(date);
	};

	console.log(startDate, endDate);

	return (
		<CalendarContainer>
			<CalendarHeader
				currentDate={currentDate}
				handlePrevMonth={handlePrevMonth}
				handleNextMonth={handleNextMonth}
			/>
			<CalendarMonthContent>
				{prevMonthDays.map((day, index) => (
					<DayButton key={`prev-${index}`} day={day} variant="disabled" />
				))}
				{[...Array(daysInMonth)].map((_, index) => {
					const day = index + 1;
					const date = { year: currentYear, month: currentMonth, date: day };

					// 判斷是否是今天
					const isToday =
						today.getFullYear() === currentDate.year &&
						today.getMonth() + 1 === currentDate.month &&
						today.getDate() === day;

					const range = isDateInRange(
						date,
						startDate,
						endDate,
						currentMonth,
						currentYear,
					);

					// 設置按鈕的 variant
					let variant: "default" | "today" | "selected" | "disabled" =
						"default";
					if (isToday) {
						variant = "today";
					} else if (range) {
						variant = "selected";
					}

					return (
						<DayButton
							key={day}
							day={day}
							variant={variant}
							onClick={() => {
								handleDateClick(date);
							}}
						/>
					);
				})}
				{nextMonthDays.map((day, index) => (
					<DayButton key={`next-${index}`} day={day} variant="disabled" />
				))}
			</CalendarMonthContent>
		</CalendarContainer>
	);
}

export default MonthCalendar;
