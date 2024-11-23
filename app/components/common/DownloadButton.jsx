import { Button } from '@mui/material';
import styled from '@emotion/styled';
import DownloadIcon from '@mui/icons-material/Download';

const StyledButton = styled(Button)`
	border: white 1px solid;
	border-radius: 25px;
	font-family: 'Unbounded', sans-serif;
	padding: 7px 38px;
	font-size: 24px;
	color: white;
	font-weight: 600;
	transition: all cubic-bezier(0.23, 1, 0.32, 1) 300ms;

	&:hover {
		background-color: #80ff00;
		color: black;
		border: #80ff00 1px solid;
	}
`;

export default function DownloadButton(props) {
	return (
		<StyledButton onClick={props.onClick}>
			{props.text}
			<DownloadIcon />
		</StyledButton>
	);
}
