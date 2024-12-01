// 獲取某月的總天數
export const getDaysInMonth = (year: number, month: number): number => {
	return new Date(year, month, 0).getDate();
};

// 獲取某月第一天是星期幾
export const getFirstDayOfMonth = (year: number, month: number): number => {
	return new Date(year, month - 1, 1).getDay();
};

export const getLastDayOfMonth = (year: number, month: number): number => {
	return new Date(year, month, 0).getDay();
};

// 判斷某日期是否在範圍內
export const isDateInRange = (
	date: { year: number; month: number; date: number },
	startDate: { year: number; month: number; date: number } | null,
	endDate: { year: number; month: number; date: number } | null,
): boolean => {
	if (!startDate) return false;

	const target = new Date(date.year, date.month - 1, date.date).getTime();

	if (startDate && !endDate) {
		const start = new Date(
			startDate.year,
			startDate.month - 1,
			startDate.date,
		).getTime();
		return target === start;
	}

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
		return target >= start && target <= end;
	}

	return false;
};
