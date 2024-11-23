'use client';
import { useEffect, useState } from 'react';
import MasteringFunctionButton from './MasteringFunctionButton';
import styled from '@emotion/styled';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { motion } from 'motion/react';
import axios from 'axios';
import { Riple } from 'react-loading-indicators';
import SocialFunction from '../common/SocialFunction';

const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 60px;
	margin-bottom: 20px;
	z-index: 1;
`;

const MasteringFunctionLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: transparent;
	color: white;
	z-index: 1;
`;

const IconImage = styled(motion.img)`
	width: 350px;
	max-width: 350px;
	margin: 20px;
`;

const AudioPlayerDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding: 20px;
`;

const BgImage = styled.img`
	/* background: url('/mastering-icons/rock-bg.svg') no-repeat center center fixed;
	background-size: cover;
	background-position: center; */
	position: fixed;
	top: 0;
	width: 110%;
	z-index: -1;
	height: 130vh;
	display: ${(props) => (props.toggle === '2' ? 'block' : 'none')};
`;

const BgColor = styled.div`
	background: linear-gradient(#000000, ${(props) => props.color});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -2;
`;

const LoadingDiv = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
`;

const StyledToggleButton = styled(ToggleButton)`
	font-family: 'Unbounded', sans-serif;
	font-weight: 500;
	color: white;
	border: 1px solid white;
	border-radius: 25px;

	&.Mui-selected {
		background-color: #80ff00 !important;
		color: #0a0a0a !important;
		border: 1px solid #80ff00 !important;
	}
`;

const StyledAudio = styled.audio`
	&::-webkit-media-controls-panel {
		background-color: ${(props) => props.color};
	}
	&::-webkit-media-controls-play-button {
		color: #ffffff;
	}a
	&::-webkit-media-controls-timeline {
		border-radius: 25px;
		margin-left: 10px;
		margin-right: 10px;
	}

	&::-webkit-media-controls-current-time-display {
		color: #ffffff;
	}
	&::-webkit-media-controls-time-remaining-display {
		color: #ffffff;
	}
	&::-webkit-media-controls-seek-back-button {
		color: #ffffff;
	}
	&::-webkit-media-controls-seek-forward-button {
		color: #ffffff;
	}
	&::-webkit-media-controls-mute-button {
		color: #0a0a0a;
	}
`;

export default function MasteringFunction(props) {
	const [selectedGenre, setSelectedGenre] = useState('pop');
	const [toggle, setToggle] = useState('1');
	const [loading, setLoading] = useState(false);

	const handleChange = (event, newToggle) => {
		setToggle(newToggle);
		handleRequest();
	};

	const handleRequest = () => {
		setLoading(true);

		const formData = new FormData();
		formData.append('file', props.originalWavFile);
		formData.append('preset', `${selectedGenre}${toggle}`);

		axios
			.post('http://144.24.78.129:8080/mastering/upload', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
				responseType: 'blob', // Expect binary data
			})
			.then((res) => {
				// Create a URL from the response
				const url = window.URL.createObjectURL(new Blob([res.data]));

				// Store the file URL and filename in state
				props.setAudioFiles(url);
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	};

	const handleClick = (genre) => {
		setSelectedGenre(genre);
		setToggle('1');
		handleRequest();
	};

	const ChangeBgColor = () => {
		switch (selectedGenre) {
			case 'pop':
				return '#C46076';
			case 'hiphop':
				return '#A20000';
			case 'ballad':
				return '#74471B';
			case 'dance':
				return '#1B746B';
			case 'rock':
				return '#3A5EB0';
			default:
				return '#000000';
		}
	};

	const control = {
		value: toggle,
		onChange: handleChange,
		exclusive: true,
	};

	return (
		<MasteringFunctionLayout>
			<BgColor color={ChangeBgColor} />
			<BgImage
				toggle={toggle}
				src={`/mastering-icons/${selectedGenre}-bg.svg`}
				key={selectedGenre}
				initial={{ opacity: 0, scale: 0.8 }} // Start animation
				animate={{ opacity: 1, scale: 1 }} // End animation
				transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth animation
			/>
			<ButtonGroup>
				<MasteringFunctionButton
					genre="Pop"
					selected={selectedGenre === 'pop'}
					onClick={() => handleClick('pop')}
				/>
				<MasteringFunctionButton
					genre="Hip-hop"
					selected={selectedGenre === 'hiphop'}
					onClick={() => handleClick('hiphop')}
				/>
				<MasteringFunctionButton
					genre="Ballad"
					selected={selectedGenre === 'ballad'}
					onClick={() => handleClick('ballad')}
				/>
				<MasteringFunctionButton
					genre="Dance"
					selected={selectedGenre === 'dance'}
					onClick={() => handleClick('dance')}
				/>
				<MasteringFunctionButton
					genre="Rock"
					selected={selectedGenre === 'rock'}
					onClick={() => handleClick('rock')}
				/>
			</ButtonGroup>
			<IconImage
				src={`/mastering-icons/${selectedGenre}.svg`}
				alt={`${selectedGenre} icon`}
				onError={(e) => {
					e.target.src = '/mastering-icons/default.svg';
				}}
			/>
			<ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
				<StyledToggleButton value="1" key="1">
					Pop 1
				</StyledToggleButton>
				<StyledToggleButton value="2" key="2">
					Pop 2
				</StyledToggleButton>
			</ToggleButtonGroup>
			{loading ? (
				<LoadingDiv>
					<Riple color="#ffffff" size="small" textColor="" />
				</LoadingDiv>
			) : (
				<AudioPlayerDiv>
					<StyledAudio controls color={ChangeBgColor}>
						<source src={props.audioFiles} type="audio/wav" />
						Your browser does not support the audio element.
					</StyledAudio>
				</AudioPlayerDiv>
			)}
			<SocialFunction audioFiles={props.audioFiles} />
		</MasteringFunctionLayout>
	);
}
