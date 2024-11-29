import styled from '@emotion/styled';
import { motion } from 'motion/react';

const blackBox = {
	initial: {
		height: '100vh',
		bottom: 0,
	},
	animate: {
		height: 10,
		display: 'none',
		transition: {
			when: 'afterChildren',
			duration: 1.5,
			ease: [0.87, 0, 0.13, 1],
		},
	},
};

const textContainer = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 0,
		transition: {
			duration: 0.25,
			when: 'afterChildren',
		},
	},
};

const text = {
	initial: {
		y: 40,
	},
	animate: {
		y: 80,
		transition: {
			duration: 1.5,
			ease: [0.87, 0, 0.13, 1],
		},
	},
};

const StyledDiv = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledMotionDiv = styled(motion.div)`
	position: absolute;
	z-index: 50;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: black;
`;

const StyledMotionSvg = styled(motion.svg)`
	position: absolute;
	z-index: 50;
	display: flex;
`;

const StyledMotionRect = styled(motion.rect)`
	width: 100%;
	height: 100%;
	fill: currentColor;
	color: grey;
`;

const StyledRect = styled.rect`
	width: 100%;
	height: 100%;
	fill: currentColor;
`;

const StyledPattern = styled.pattern`
	color: white;
`;

const StyledFont = styled.text`
	font-weight: bold;
	font-size: 3rem;
`;

const InitialTransition = () => {
	return (
		<StyledDiv>
			<StyledMotionDiv initial="initial" animate="animate" variants={blackBox}>
				<StyledMotionSvg variants={textContainer}>
					<svg>
						<StyledPattern
							id="pattern"
							patternUnits="userSpaceOnUse"
							width={750}
							height={800}
						>
							<StyledRect />
							<StyledMotionRect variants={text} />
						</StyledPattern>
						<StyledFont
							text-anchor="middle"
							x="20%"
							y="50%"
							style={{ fill: 'url(#pattern)' }}
						>
							VemmX
						</StyledFont>
					</svg>
				</StyledMotionSvg>
			</StyledMotionDiv>
		</StyledDiv>
	);
};

export default InitialTransition;
