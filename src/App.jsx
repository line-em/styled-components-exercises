import styled from "styled-components";

function App() {
	return (
		<>
			<Header>Progress Tracker</Header>
			{allDays}
		</>
	);
}

// Styles
const Header = styled.h1`
	color: palevioletred;
	text-align: center;
`;
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

// Array
const weekDaysArr = ["S", "M", "T", "W", "T", "F", "S"];
const colorArr = [
	"lightseagreen",
	"mediumpurple",
	"palevioletred",
	"violet",
	"cornflowerblue",
	"peru",
	"pink"
];

const allDays = weekDaysArr.map((day, index) => (
	<ProgressBar>
		<WeekDay key={day} color={colorArr[index]}>
			{day}
		</WeekDay>
	</ProgressBar>
));

export default App;
