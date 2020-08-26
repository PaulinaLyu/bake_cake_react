import styled from 'styled-components';
import BannerImg from '../img/banner.jpg';

export const Banner = styled.div`
	width: 100%;
	height: 310px;
	background-image: ${`url(${BannerImg})`};
	background-position: center;
	background-size: cover;
	margin-top: 80px;
`;