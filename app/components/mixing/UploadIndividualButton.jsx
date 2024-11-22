import styled from '@emotion/styled';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Chip } from '@mui/material';
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
`;

const StyledChip = styled(Chip)`
	background-color: #80ff00;
	color: #000000;
	font-family: 'Unbounded', sans-serif;
	max-width: 200px;
	margin-top: 10px;
`;

export default function UploadIndividualButton(props) {
    return (
       <>
          <StyledButton component="label">
             <>
                <VisuallyHiddenInput
                   type="file"
                   onChange={(event) => {
                      const file = event.target.files[0];
                      const fileObject = { type: props.type, file };
                      props.setUploadingFiles((prev) => {
                         const existingFileIndex = prev.findIndex(
                            (file) => file.type === props.type
                         );
                         if (existingFileIndex !== -1) {
                            const updatedFiles = [...prev];
                            updatedFiles[existingFileIndex] = fileObject;
                            return updatedFiles;
                         }
                         return [...prev, fileObject];
                      });
                   }}
                />
                {props.type}
                <CloudUploadIcon fontSize="inherit" />
             </>
          </StyledButton>
 
          {/* Show chip only when a non-null file exists for this type */}
          {props.uploadingFiles.some(
             (file) => file.type === props.type && file.file !== null
          ) && (
             <StyledChip
                label={
                   props.uploadingFiles.find((file) => file.type === props.type)?.file
                      ?.name
                }
                onDelete={() => {
                   props.setUploadingFiles((prev) =>
                      prev.map((file) =>
                         file.type === props.type ? { ...file, file: null } : file
                      )
                   );
                }}
             />
          )}
       </>
    );
 }
 
