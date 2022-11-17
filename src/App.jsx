import styled from "styled-components";
import Section from "./components/Section";

// Styles
const Header = styled.h1`
	color: palevioletred;
	text-align: center;
`;

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

function App() {
	return (
		<>
			<Header>Progress Tracker</Header>
			{weekDaysArr.map((day, index) => (
				<Section day={day} color={colorArr[index]} key={index} />
			))}
		</>
	);
}

export default App;
