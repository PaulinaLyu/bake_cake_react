import React from 'react';
import styled from 'styled-components';
import BannerImg from '../../img/banner.jpg';

const BannerStyled= styled.div`
	width: 100%;
	height: 400px;
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
	font-size: 20px;
`;

export const Banner = () => (
	<BannerStyled>
		<BannerInner>
			<BannerTitle>Bakecake</BannerTitle>
			<BannerSubtitle>Delicious desserts are closer than you think</BannerSubtitle>
		</BannerInner>
	</BannerStyled>
);