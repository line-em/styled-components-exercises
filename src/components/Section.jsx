import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

const Section = ({ day, color }) => {
	const [progress, setProgress] = useState(50);

	const handleProgress = (type) => {
		if (type === "increase") {
			setProgress((prevProgress) => prevProgress + 5);
		} else {
			setProgress((prevProgress) => prevProgress - 5);
		}
	};

	return (
		<Wrapper>
			<Button onClick={() => handleProgress("decrease")} disabled={progress === 0}>
				-
			</Button>

			<ProgressBarContainer>
				<WeekDay color={color}>{day}</WeekDay>
				<ProgressBar percentage={progress} color={color} />
			</ProgressBarContainer>

			<Button onClick={() => handleProgress("increase")} disabled={progress === 100}>
				+
			</Button>
		</Wrapper>
	);
};
export default Section;

// styles
const ProgressBarContainer = styled.section`
	width: 100%;
	border-radius: 10px;
	border: palevioletred solid 1px;
	display: flex;
	align-items: center;
	padding: 3px;
	margin: 0 10px;
`;
const WeekDay = styled.article`
	width: 20%;
	color: whitesmoke;
	font-weight: bold;
	border-radius: 8px 0 0 8px;
	border-right: 3px papayawhip solid;
	background-color: ${({ color }) => color || "cornflowerblue"};
`;
const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;
const Button = styled.button`
	height: 25px;
	width: 25px;
	border-radius: 25%;
	border: transparent;
	opacity: 0.6;
	background-color: palevioletred;
	color: whitesmoke;
	font-weight: bold;
	font-size: 0.95rem;
	transition: all 200ms ease-in-out;

	&:hover {
		opacity: 1;
		cursor: pointer;
	}

	&:active {
		transform: translateY(1px);
	}

	&:disabled {
		background-color: transparent;
		cursor: default;
	}
`;
