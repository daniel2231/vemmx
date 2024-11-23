'use client';
import styled from '@emotion/styled';
import Link from 'next/link';

const StyledNavbar = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	background-color: #101010;
	color: white;
	font-family: 'Unbounded', sans-serif;
	z-index: 100;
	padding: 0 70px;
`;

const StyledButtonDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledButton = styled.div`
	background-color: #101010;
	color: white;
	padding: 10px;
	font-family: 'Unbounded', sans-serif;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 140px;
	font-size: 20px;
	font-weight: 600;
	cursor: pointer;
	&:hover {
		border-bottom: 2px solid white;
	}
`;

export default function Navbar(props) {
	return (
		<StyledNavbar>
			<h1>VemmX</h1>
			<StyledButtonDiv>
				<StyledButton>
					<Link href="/">Home</Link>
				</StyledButton>
				<StyledButton>
					<Link href="/mastering">Mastering</Link>
				</StyledButton>
				<StyledButton>
					<Link href="/mixing">Mixing</Link>
				</StyledButton>
			</StyledButtonDiv>
		</StyledNavbar>
	);
}
