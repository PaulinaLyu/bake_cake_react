import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './components/NavBar';

const GlobalStyle = createGlobalStyle`
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
  `;

function App() {
 	return (
		<>
			<GlobalStyle />
			<NavBar />
		</>
  	);
}

export default App;
