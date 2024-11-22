import styled from '@emotion/styled';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import { Riple } from 'react-loading-indicators';

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
});

const StyledButton = styled.button`
	font-family: 'Unbounded', sans-serif;
	font-weight: 500;
	appearance: none;
	// use props to change the background color
	background-color: #80ff00;
	border: none;
	border-radius: 15px;
	color: #000000;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
	font-size: 37px;

	line-height: normal;
	margin: 30px 20px;
	width: auto;
	min-height: 60px;
	min-width: 0;
	outline: none;
	padding: 30px 15px;
	text-align: center;
	text-decoration: none;
	transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	width: auto;
	will-change: transform;
	transition: all 0.3s;

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

	&:focus {
		background-color: #808080;
		border: none;
	}
`;

export default function UploadButton(props) {
	const [loading, setLoading] = useState(false);
	const handleClick = () => {
		// setLoading(true);
		props.handleClick();
	};

	return (
		<StyledButton onClick={handleClick}>
			{!loading ? (
				<>
					<VisuallyHiddenInput type="file" />
					<p>Let's Get Loud!</p>
					<CloudUploadIcon fontSize="inherit" />
				</>
			) : (
				<>
					{/* <ThreeDot
						variant="bob"
						color="#ffffff"
						size="large"
						text="Getting Loud..."
						textColor="#ffffff"
					/> */}
					<p>Getting Loud...</p>
					<Riple color="#000000" size="small" textColor="" />
				</>
			)}
		</StyledButton>
	);
}
