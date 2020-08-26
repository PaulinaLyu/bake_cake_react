import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';
import buttonIcon from '../img/buttonicon.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #FEEED7;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
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

const ButtonHeader = styled.button`
    display: block;
    position: relative;
    height: 40px;
    background-color: transparent;
    border: 0;
    padding: 0;
`;

const ButtonHeaderSecondary = styled.div`
    overflow: hidden;
    margin-left: 20px;
    height: 40px;
`;

const ButtonHeaderSecondaryContent = styled.div`
    display: block;
    height: 40px;
    text-align: left;
    padding-left: 32px;
    padding-right: 24px;
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    background: #FEEED7;
    line-height: 40px;
    color: black;
    border-radius: 0 20px 20px 0;
    transform: translate3d(-100%, 0, 0);
    transition: transform 175ms ease;

    ${ButtonHeader}:hover & {
        transform: translate3d(0, 0, 0);
    }
`;

const ButtonHeaderPrimary = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    left: 0;
    top: 50%;
    margin-top: -20px;
    
`;

const ButtonHeaderIcon = styled.img`
    display: block;
    position: absolute;
    background: #FEEED7;
    width: 40px;
    border-radius: 20px;
    padding: 20%;

`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt='logo'/>
            <H1>Bake<LogoSpan>Cake</LogoSpan></H1>
        </Logo>
        <ButtonHeader>
            <ButtonHeaderSecondary>
                <ButtonHeaderSecondaryContent>
                    Login
                </ButtonHeaderSecondaryContent>
            </ButtonHeaderSecondary>
            <ButtonHeaderPrimary>
                <ButtonHeaderIcon src={buttonIcon} alt='icon'/>
            </ButtonHeaderPrimary>
        </ButtonHeader>
    </NavBarStyled>
);