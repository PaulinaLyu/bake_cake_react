import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    display: block;
	height: 50px;
	width: 250px;
	margin: 0 auto;
	background-color: #FEEED7;
	color: black;
	border-color: transparent;
	cursor: pointer;
	padding: 10px;
	font-size: 20px;
	font-family: 'Lato', sans-serif;
	transition-property: color, background-color, border-color;
	transition-duration: .3s;
		:hover {
			background-color: #fff;
			border: 30;
			border-color: #FEEED7;
			border-style: solid;
		}
`;

export const Button = () => (
	<ButtonStyled>Add</ButtonStyled>
);