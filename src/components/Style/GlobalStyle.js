import styled, { createGlobalStyle } from 'styled-components';

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
	}

	h2 {
		font-size: 30px;
	}

	h3 {
		font-size: 20px;
	}

	p {
		padding: 0;
		margin: 0;
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

export const Container = styled.div`
	width: 100%;
	height: 100%;
  	max-width: 1230px;
  	margin: 0 auto;
  	padding: 0 20px;
`;
