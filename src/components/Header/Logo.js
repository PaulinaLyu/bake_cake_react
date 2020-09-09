import React from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo.svg';

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    letter-spacing: normal;
`;

const LogoDiv = styled.div`
    font-size: 24px;
    margin-left: 15px;
`;
const LogoSpan = styled.span`
    font-weight: 900;
    text-transform: uppercase;
    color: white; 
`;

const ImgLogo = styled.img`
    width: 50px;
`;

export const Logo = () => (
    <LogoStyled>
        <ImgLogo src={logoImg} alt='logo'/>
        <LogoDiv>Bake<LogoSpan>Cake</LogoSpan></LogoDiv>
    </LogoStyled>
);