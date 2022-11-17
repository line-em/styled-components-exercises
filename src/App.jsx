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
		<>
			<MainWrapper>
				<Header>Progress Tracker</Header>
				<Divider />
				{weekDaysArr.map((day, index) => (
					<Section day={day} color={colorArr[index]} key={index} />
				))}
			</MainWrapper>
			<Footer>
				Coded by
				<a href="https://github.com/line-em" target="_blank" rel="noopener noreferrer">
					@Line-em
				</a>
			</Footer>
		</>
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

const Footer = styled.footer`
	font-size: 0.8rem;
	margin-top: 15px;

	a,
	a:visited {
		margin: 0 4px;
		transition: all 300ms ease;
		color: cornflowerblue;
	}

	a:hover {
		color: tomato;
	}
`;

export default App;
