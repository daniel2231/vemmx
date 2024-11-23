import styled from '@emotion/styled';
import SocialFunction from '../common/SocialFunction';

const AudioPlayerDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding: 20px;
`;

const MixingFunctionLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: transparent;
	color: white;
	z-index: 1;
`;

const StyledImg = styled.img`
	width: 350px;
	max-width: 350px;
	margin: 20px;
`;

const StyledTitle = styled.h1`
	font-family: 'Unbounded', sans-serif;
	font-size: 40px;
	color: white;
`;

const StyledP = styled.p`
	margin-top: 20px;
	margin-bottom: 20px;
	font-family: 'Unbounded', sans-serif;
	font-size: 30px;
	color: white;
`;

const StyledAudio = styled.audio`
	&::-webkit-media-controls-panel {
		background-color: ${(props) => props.color};
	}
	&::-webkit-media-controls-play-button {
		color: #ffffff;
	}
	a &::-webkit-media-controls-timeline {
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

export default function MixingFunction(props) {
	return (
		<MixingFunctionLayout>
			<StyledTitle>Here's Your Music</StyledTitle>
			<StyledImg
				src="/mixing-icons/Headphone 3D Animated Icon.gif"
				alt="Headphone 3D Animated Icon"
			/>
			<StyledP>Try it out!</StyledP>
			<AudioPlayerDiv>
				<StyledAudio controls>
					<source src={props.audioFiles} type="audio/wav" />
				</StyledAudio>
			</AudioPlayerDiv>
			<SocialFunction audioFiles={props.audioFiles} />
		</MixingFunctionLayout>
	);
}
