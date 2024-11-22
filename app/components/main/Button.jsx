import styled from '@emotion/styled';

const StyledButton = styled.button`
	font-family: 'Unbounded', sans-serif;
	appearance: none;
	background-color: #000000;
	border: 2px solid #1a1a1a;
	border-radius: 15px;
	box-sizing: border-box;
	color: #ffffff;
	cursor: pointer;
	display: inline-block;
	font-size: 25px;
	font-weight: 800;
	line-height: normal;
	margin: 0;
	min-height: 60px;
	min-width: 0;
	outline: none;
	padding: 30px 24px;
	text-align: center;
	text-decoration: none;
	transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	width: 100%;
	will-change: transform;

	&:disabled {
		pointer-events: none;
	}

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
		transform: translateY(-2px);
	}

	&:active {
		box-shadow: none;
		transform: translateY(0);
	}
`;

export default function MainPageButton(props) {
	return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
}
