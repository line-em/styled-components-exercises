import styled from "styled-components";

const ProgressBox = styled.section`
	display: block;
	padding-left: 10px;
	text-align: left;
	opacity: 0.5;
	background-color: ${({ color }) => color || "gray"};
	border-radius: 0 8px 8px 0;
	width: ${({ percentage }) => percentage + "%" || "20%"};
	content: "";
`;

const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	& p {
		position: absolute;
		margin-left: 50%;
		transform: translateX(-50%);
		color: #2d292f;
		font-size: 0.8rem;
		z-index: 1;
	}
`;

const ProgressBar = ({ percentage, color }) => {
	return (
		<Container>
			<p>{percentage}%</p>
			<ProgressBox color={color} percentage={percentage}>
				&nbsp;
			</ProgressBox>
		</Container>
	);
};

export default ProgressBar;
