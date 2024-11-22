import { Button } from '@mui/material';
import styled from '@emotion/styled';

export default function MasteringFunctionButton(props) {
	const StyledButton = styled(Button)`
		border: ${props.selected ? 'transparent' : 'white'} 1px solid;
		border-radius: 25px;
		font-family: 'Unbounded', sans-serif;
		padding: 7px 38px;
		font-size: 24px;
		color: ${props.selected ? 'black' : 'white'};
		font-weight: 600;
		transition: all cubic-bezier(0.23, 1, 0.32, 1) 300ms;
		background-color: ${props.selected ? '#80ff00' : 'transparent'};

		&:hover {
			background-color: #80ff00;
			color: black;
			border: #80ff00 1px solid;
		}
	`;

	return <StyledButton onClick={props.onClick}>{props.genre}</StyledButton>;
}
