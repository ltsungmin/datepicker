import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ButtonBase } from "../ButtonBase/index";

const ArrowLeftButton = (props: any) => (
	<ButtonBase {...props}>
		<ChevronLeft size={24} />
	</ButtonBase>
);

const ArrowRightButton = (props: any) => (
	<ButtonBase {...props}>
		<ChevronRight size={24} />
	</ButtonBase>
);

const MouthSelectButton = styled(ButtonBase)`
	flex-grow: 1;
	font-size: 18px;
`;

const CalenderHeader = styled.div`
	display: flex;
	margin-bottom: 16px;
`;

export { ArrowLeftButton, ArrowRightButton, MouthSelectButton, CalenderHeader };
