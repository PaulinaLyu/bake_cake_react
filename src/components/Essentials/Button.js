import styled from 'styled-components';

export const Button = styled.button`
    display: block;
	height: 50px;
	width: 250px;
	margin: 0 auto;
	background-color: #FEEED7;
	color: black;
	border: 2px solid transparent;
	cursor: pointer;
	padding: 10px;
	font-size: 20px;
	font-family: 'Lato', sans-serif;
	transition-property: color, background-color, border-color;
	transition-duration: .3s;
		:hover {
			background-color: #fff;
			border: 2px solid #FEEED7;
		}
`;