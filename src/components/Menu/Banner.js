import React from 'react';
import styled from 'styled-components';
import BannerImg from '../../img/banner.jpg';
import { Container } from '../Style/AdditionalStyles';
import { device } from '../Style/MediaQuery';

const BannerStyled= styled.div`
	width: 100%;
	height: 500px;
	background-image: ${`url(${BannerImg})`};
	background-position: center;
	background-size: cover;
`;

const BannerInner= styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const BannerTitle= styled.h1`
	color: white;
	text-transform: uppercase;
`;

const BannerSubtitle= styled.p`
	color: white;
	text-align: center;
	font-size: 20px;

	@media ${device.tablet} { 
		font-size: 14px;
	}
`;

export const Banner = () => (
	<BannerStyled>
		<Container>
			<BannerInner>
				<BannerTitle>Bakecake</BannerTitle>
				<BannerSubtitle>Delicious desserts are closer than you think</BannerSubtitle>
			</BannerInner>
		</Container>
	</BannerStyled>
);