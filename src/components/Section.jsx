import styled from "styled-components";

const ProgressBar = styled.section`
	width: 100%;
	border-radius: 10px;
	border: palevioletred solid 1px;
	display: flex;
	align-items: center;
	gap: 10px;

	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;
const WeekDay = styled.article`
	width: 20%;
	color: whitesmoke;
	font-weight: bold;
	border-radius: 10px 0 0 10px;
	border: papayawhip solid 3px;
	background-color: ${({ color }) => color || "cornflowerblue"};
`;

const Weekend = styled(WeekDay)`
	opacity: 0.5;
`;

const Section = ({ day, color }) => {
	return (
		<ProgressBar>
			{day === "S" ? <Weekend>{day}</Weekend> : <WeekDay color={color}>{day}</WeekDay>}
		</ProgressBar>
	);
};

export default Section;
