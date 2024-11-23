'use client';

import styled from '@emotion/styled';
import MasteringFunction from '../components/mastering/MasteringFunction';
import UploadButton from '../components/mastering/UploadButton';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavigateBeforeSharp } from '@mui/icons-material';
import Navbar from '../components/common/navbar/Navbar';

const ContentDiv = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 30%;
	gap: 60px;
	text-align: center;
`;

const StyledP = styled(motion.p)`
	font-family: 'Unbounded', sans-serif;
	font-size: 30px;
	color: white;
`;

const MasteringPageLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	color: white;
`;

const title = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};

const products = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};

const content = {
	animate: {
		transition: { staggerChildren: 0.1, delayChildren: 0.3 },
	},
};

export default function Mastering() {
	const [receivedAudioStatus, setReceivedAudioStatus] = useState(true);
	const [audioFiles, setAudioFiles] = useState(null);
	const [originalWavFile, setOriginalWavFile] = useState(null);

	return (
		<AnimatePresence>
			<motion.div exit={{ opacity: 0 }}>
				<motion.div initial="initial" animate="animate" variants={content}>
					<Navbar />
					<MasteringPageLayout>
						{!receivedAudioStatus ? (
							<ContentDiv
								variants={content}
								initial="initial"
								animate="animate"
							>
								<StyledP variants={title}>
									Upload your wav file to get started!
								</StyledP>
								<motion.div variants={products}>
									<UploadButton
										setReceivedAudioStatus={setReceivedAudioStatus} // Pass setReceivedAudioStatus to update state
										setAudioFiles={setAudioFiles}
										setOriginalWavFile={setOriginalWavFile}
									/>
								</motion.div>
							</ContentDiv>
						) : (
							<MasteringFunction
								audioFiles={audioFiles}
								setAudioFiles={setAudioFiles}
								originalWavFile={originalWavFile}
							/>
						)}
					</MasteringPageLayout>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
