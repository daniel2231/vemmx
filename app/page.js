'use client';
import styled from '@emotion/styled';
import MainPageButton from './components/main/Button';
import InitialTransition from './components/animation/InitialTransition';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from 'next/link';
import { Key, Keyboard } from '@mui/icons-material';

const BackgroundImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const MainPageLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;

	background-image: url('/main-page-img.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
`;

const StyledTitle = styled(motion.h1)`
	font-family: 'Unbounded', sans-serif;
	color: white;
	font-size: 80px;
	font-weight: bolder;
	text-align: center;
	padding-bottom: 20px;
`;

const StyledParagraph = styled(motion.p)`
	font-family: 'Unbounded', sans-serif;
	font-weight: 300;
	color: white;
	font-size: 30px;
	text-align: center;
	padding-bottom: 40px;
`;

const ButtonDiv = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	gap: 60px;
`;

const content = {
	animate: {
		transition: { staggerChildren: 0.1, delayChildren: 2.8 },
	},
};

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

const BackToHomePageLink = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	padding: 20px;
	color: white;
	z-index: 1;
	display: flex;
	align-items: center;
	font-family: 'Unbounded', sans-serif;
	cursor: pointer;
	
`;

export default function Home() {
	const router = useRouter();
	return (
		<>
			<motion.div exit={{ opacity: 0 }}>
				<InitialTransition />

				<motion.div initial="initial" animate="animate" variants={content}>
					<MainPageLayout>
						<BackToHomePageLink>
							<KeyboardBackspaceIcon />
							<Link href="https://vemmx.com">Back to Home Page</Link>
						</BackToHomePageLink>
						<BackgroundImage />
						<StyledTitle variants={title}>
							Upgrade Your Music with Us
						</StyledTitle>

						<StyledParagraph variants={title}>
							Get your music mastered or mixed by our professional AI.
						</StyledParagraph>

						<ButtonDiv variants={products}>
							<MainPageButton onClick={() => router.push('/mixing')}>
								Mixing
							</MainPageButton>
							<MainPageButton onClick={() => router.push('/mastering')}>
								Mastering
							</MainPageButton>
						</ButtonDiv>
					</MainPageLayout>
				</motion.div>
			</motion.div>
		</>
	);
}
