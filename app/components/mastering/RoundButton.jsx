import styled from '@emotion/styled';
import { Button, Fab } from '@mui/material';

const StyledRoundButton = styled(Fab)`
	border: white 1px solid;
	font-family: 'Unbounded', sans-serif;
	font-size: 24px;
	color: white;
	line-height: 0px;
	transition: all cubic-bezier(0.23, 1, 0.32, 1) 300ms;
	background-color: transparent;

	&:hover {
		background-color: #80ff00;
		color: black;
		border: #80ff00 1px solid;
	}
`;

export default function RoundButton(props) {
	return (
		<StyledRoundButton onClick={props.onClick}>{props.icon}</StyledRoundButton>
	);
}
