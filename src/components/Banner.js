import React from 'react';
import styled from 'styled-components';
import BannerImgUrl from '../img/banner.jpg';

const BannerImg = styled.div`
	width: 100%;
	height: 310px;
	background-image: ${`url(${BannerImgUrl})`};
	background-position: center;
	background-size: cover;
	margin-top: 80px;
`;

export const Banner = () => (	
	<BannerImg>
	</BannerImg>
);