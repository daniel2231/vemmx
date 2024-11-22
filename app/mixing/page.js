'use client';

import styled from '@emotion/styled';

// import UploadButton from '../components/mastering/UploadButton';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import UploadButton from '../components/mixing/UploadButton';
import UploadIndividualButton from '../components/mixing/UploadIndividualButton';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import MixingFunction from '../components/mixing/MixingFunction';

const ContentDiv = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 80%;
	gap: 60px;
	text-align: center;
`;

const StyledP = styled(motion.p)`
	font-family: 'Unbounded', sans-serif;
	font-size: 30px;
	color: white;
`;

const UploadIndividualButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 20px;
	margin: 20px;
`;

const MasteringPageLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	color: white;
`;

const ButtonDiv = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	gap: 60px;
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

const UploadTypes = ['Vocal', 'Guitar', 'Bass', 'Drum'];

export default function Mixing() {
	const [receivedAudioStatus, setReceivedAudioStatus] = useState(false);
	const [audioFiles, setAudioFiles] = useState(null);
	const [loading, setLoading] = useState(false);
	const [uploadingFiles, setUploadingFiles] = useState([
		{
			type: 'Vocal',
			file: null,
		},
		{
			type: 'Guitar',
			file: null,
		},
		{
			type: 'Bass',
			file: null,
		},
		{
			type: 'Drum',
			file: null,
		},
	]);

	const sendPostRequest = () => {
		const form = new FormData();
		uploadingFiles.forEach((file) => {
			form.append('files', file.file);
		});
		axios
			.post('http://144.24.78.129:8080/mixing/', form, {
				headers: { 'Content-Type': 'multipart/form-data' },
				responseType: 'blob', // Expect binary data
			})
			.then((res) => {
				// Create a URL from the response
				const url = window.URL.createObjectURL(new Blob([res.data]));

				// Store the file URL and filename in state
				setReceivedAudioStatus(true);
				setAudioFiles(url);
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	};

	return (
		<AnimatePresence>
			<motion.div exit={{ opacity: 0 }}>
				<motion.div initial="initial" animate="animate" variants={content}>
					<MasteringPageLayout>
						{!receivedAudioStatus ? (
							<ContentDiv
								variants={content}
								initial="initial"
								animate="animate"
							>
								<StyledP variants={title}>
									We need your vocal, guitar, bass, and drum wav files to get
									started.
								</StyledP>
								<ButtonDiv variants={products}>
									<UploadIndividualButtonGroup>
										{UploadTypes.map((type) => (
											<div key={uuidv4()}>
												<UploadIndividualButton
													type={type}
													uploadingFiles={uploadingFiles}
													setUploadingFiles={setUploadingFiles}
												/>
											</div>
										))}
									</UploadIndividualButtonGroup>
								</ButtonDiv>
								<ButtonDiv variants={products}>
									<UploadButton
										uploadingFiles={uploadingFiles}
										setUploadingFiles={setUploadingFiles}
										handleClick={sendPostRequest}
									/>
								</ButtonDiv>
							</ContentDiv>
						) : (
							<MixingFunction audioFiles={audioFiles} />
						)}
					</MasteringPageLayout>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
