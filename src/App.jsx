import styled from "styled-components";
import Section from "./components/Section";

const weekDaysArr = ["S", "M", "T", "W", "T", "F", "S"];
const colorArr = [
	"lightseagreen",
	"mediumpurple",
	"palevioletred",
	"violet",
	"cornflowerblue",
	"peru",
	"tomato"
];

function App() {
	return (
		<MainWrapper>
			<Header>Progress Tracker</Header>
			<Divider />
			{weekDaysArr.map((day, index) => (
				<Section day={day} color={colorArr[index]} key={index} />
			))}
		</MainWrapper>
	);
}

// Styles
const Header = styled.h1`
	color: palevioletred;
	text-align: center;
`;

const MainWrapper = styled.main`
	background-color: #fff6e3;
	padding: 50px;
	border-radius: 25px;
	box-shadow: 2px 2px 20px #00000030;
`;

const Divider = styled.hr`
	margin: 15px 0;
	border: palevioletred 2px solid;
	opacity: 0.5;
`;

export default App;
