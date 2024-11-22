'use client';
import styled from '@emotion/styled';

const StyledNavbar = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: #333;
	color: white;
	opacity: 0.9;
`;

export default function Navbar(props) {
	return (
		<StyledNavbar>
			<h1>Vemmx</h1>
			<div>
				<button>Mastering</button>
				<button>Mixing</button>
			</div>
		</StyledNavbar>
	);
}
