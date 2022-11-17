import styled from "styled-components";

const ProgressBox = styled.section`
	display: block;
	text-align: left;
	opacity: 0.5;
	background-color: ${({ color }) => color || "gray"};
	border-radius: 0 8px 8px 0;
	width: ${({ percentage }) => percentage + "%" || "20%"};
`;

const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	& p {
		position: absolute;
		margin-left: 50%;
		transform: translateX(-50%);
		color: ${({ percentage }) => {
			if (percentage <= 25) return "red";
			else if (percentage >= 75) return "blue";
			return "#2d292f";
		}};
		font-size: 0.8rem;
		z-index: 1;
	}
`;

const ProgressBar = ({ percentage, color }) => {
	return (
		<Container percentage={percentage}>
			<p>{percentage < 100 ? `${percentage} %` : "Done! 🎉"}</p>
			<ProgressBox color={color} percentage={percentage}>
                &nbsp;
			</ProgressBox>
		</Container>
	);
};

export default ProgressBar;
