import styled from '@emotion/styled';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
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

const StyledButton = styled(Button)`
	margin-top: 20px;
	font-family: 'Unbounded', sans-serif;
	font-weight: 500;
	appearance: none;
	// use props to change the background color
	background-color: #80ff00;
	border: none;
	border-radius: 15px;
	box-sizing: border-box;
	color: #000000;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
	font-size: 37px;

	line-height: normal;
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

const DropZone = styled('div')`
	border: 2px dashed #ccc;
	padding: 20px;
	text-align: center;
	border-radius: 10px;
	background-color: ${(props) =>
		props.isDragging ? '#80ff00' : 'transparent'};
	transition: background-color 0.3s ease;
	height: 200px;
`;

export default function UploadButton(props) {
	const [loading, setLoading] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

	const handleFileUpload = (file) => {
		setLoading(true);

		const formData = new FormData();
		formData.append('file', file);
		formData.append('preset', 'pop1');

		props.setOriginalWavFile(file);

		axios
			.post('https://rappire.site/mastering/upload', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
				responseType: 'blob', // Expect binary data
			})
			.then((res) => {
				// Create a URL from the response
				const url = window.URL.createObjectURL(new Blob([res.data]));

				// Store the file URL and filename in state
				props.setReceivedAudioStatus(true);
				props.setAudioFiles(url);
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
		const file = e.dataTransfer.files[0];
		if (file) handleFileUpload(file);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	};

	const handleInputChange = (e) => {
		const file = e.target.files[0];
		if (file) handleFileUpload(file);
	};

	return (
		<>
			<DropZone
				isDragging={isDragging}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
			>
				<Typography variant="h6">
					Drag and drop your file here, or click the button below to upload
				</Typography>
			</DropZone>

			{!loading ? (
				<StyledButton component="label">
					<VisuallyHiddenInput type="file" onChange={handleInputChange} />
					<p>Let's Get Loud!</p>
					<CloudUploadIcon fontSize="inherit" />
				</StyledButton>
			) : (
				<StyledButton>
					<p>Getting Loud...</p>
					<Riple color="#000000" size="small" textColor="" />
				</StyledButton>
			)}
		</>
	);
}
