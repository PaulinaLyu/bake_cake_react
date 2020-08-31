import { createGlobalStyle } from 'styled-components';

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
		font-family: 'Raleway', sans-serif;
		font-size: 20px;
		font-weight: 400;
		color: black;
	  }
	  
	img {
		max-width: 100%;
		height: auto;
	}
	
	a {
		text0decoration: none;
		color: inherit;
	}

	h1,h2,h3,h4 {
		padding: 0;
		margin: 0;
		font-family: 'Lato', sans-serif;
		font-weight: 700;
	}

	p {
		padding: 0;
		margin: 0;
	}

	button {
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