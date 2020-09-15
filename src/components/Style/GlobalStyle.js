import { createGlobalStyle } from 'styled-components';
import { device } from './MediaQuery';

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		font-family: 'Lato', sans-serif;
		font-size: 15px;
		font-weight: 400;
		letter-spacing: .5px;
		color: black;
	}

	.no-scroll {
		overflow: hidden;
	}
	  
	img {
		max-width: 100%;
		height: auto;
	}
	
	a {
		text-decoration: none;
		color: inherit;
	}

	h1,h2,h3,h4 {
		padding: 0;
		margin: 0;
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
	}

	h1 {
		font-size: 50px;
		letter-spacing: 6px;

		@media ${device.tablet} { 
			font-size: 40px;
		}

		@media ${device.mobileL} { 
			font-size: 30px;
		}
	}

	h2 {
		font-size: 30px;

		@media ${device.tablet} { 
			font-size: 24px;
		}

		@media ${device.mobileL} { 
			font-size: 20px;
		}
	}

	h3 {
		font-size: 20px;

		@media ${device.mobileL} { 
			font-size: 18px;
		}
	}

	h4 {
		font-size: 18px;

		@media ${device.mobileL} { 
			font-size: 16px;
		}
	}

	p {
		padding: 0;
		margin: 0;
		line-height: 1.5;

		@media ${device.tablet} { 
			font-size: 16px;
		}
	}

	button, input {
		cursor: pointer;

		:focus {
			outline: none;
		}
	}

	button, input {
		font: inherit;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance:none;
	}

	ul {
		list-style: none;
		padding: 0;
	}
  `;
