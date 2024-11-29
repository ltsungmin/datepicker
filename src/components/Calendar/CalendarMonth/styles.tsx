import styled from "styled-components";

const CalendarContent = styled.div`
	display: grid;
`;

export const CalendarMonthContent = styled(CalendarContent)`
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export default CalendarMonthContent;
