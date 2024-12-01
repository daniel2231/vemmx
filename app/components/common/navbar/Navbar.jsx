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
	font-family: 'Space Grotesk', sans-serif;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 140px;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	&:hover {
		border-bottom: 2px solid white;
	}
`;

export default function Navbar(props) {
	return (
    <StyledNavbar>
      <Link href="https://www.vemmx.com/" style={{
        fontFamily: "Bebas Neue",
        fontSize: '14px',
        fontWeight: 500,
      }}>
        <h1>VemmX</h1>
      </Link>
      <StyledButtonDiv>
        <StyledButton>
          <Link href="https://www.vemmx.com/about">About VemmX</Link>
        </StyledButton>
        <StyledButton>
          <Link href="https://www.vemmx.com/our-services">Our Services</Link>
        </StyledButton>
        <StyledButton>
          <Link href="/mastering">Mastering</Link>
        </StyledButton>
        <StyledButton>
          <Link href="/mixing">Mixing</Link>
        </StyledButton>
        <StyledButton>
          <Link href="https://www.vemmx.com/pricing/">Pricing</Link>
        </StyledButton>
        <StyledButton>
          <Link href="https://www.vemmx.com/frequently-asked-questions/">FAQ</Link>
        </StyledButton>
        <StyledButton>
          <Link href="https://www.vemmx.com/contact/">Contact Us</Link>
        </StyledButton>
      </StyledButtonDiv>

      <button className="hamburger-btn toggle-mobile-menu unbutton side-panel-hamburger">
        <span className="hamburger-btn-line hamburger-btn-line--1"></span>
        <span className="hamburger-btn-line hamburger-btn-line--2"></span>
        <span className="hamburger-btn-line hamburger-btn-line--3"></span>
      </button>
    </StyledNavbar>
  );
}
