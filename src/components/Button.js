import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    display: block;
	height: 50px;
	width: 100%;
    background-color: #FEEED7;
    border: 0;
	padding: 10px;
	font-size: 20px;
	font-family: 'Lato', sans-serif;
	margin-top: 30px;

`;

export const Button = () => (
	<ButtonStyled>Add</ButtonStyled>
);