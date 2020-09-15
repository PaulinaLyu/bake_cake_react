import styled from 'styled-components';
import { device } from './MediaQuery';

export const Container = styled.div`
	width: 100%;
	height: 100%;
  	max-width: 1230px;
  	margin: 0 auto;
	padding: 0 20px;
	background: "transparent";

	@media ${device.laptop} { 
		padding-left: 70px;
	  }
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left:0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .7);
	z-index: 2000;
`;

export const Total= styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 30px 0;
	font-weight: 700;
	& span:first-child {
		flex-grow: 1;
	}
`;

export const TotalPrice= styled.div`
	font-size: 18px;
	text-align: right;
	min-width: 65px;
	margin-left: 20px;
`;