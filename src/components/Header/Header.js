import React from 'react';
import styled from 'styled-components';
import buttonIcon from '../../img/buttonicon.svg';
import { Container } from '../Style/GlobalStyle';
import { Logo } from './Logo';

const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    padding: 15px 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: #FEEED7;
`;

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonHeader = styled.button`
    display: block;
    position: relative;
    left: 75px;
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

const LogOut = styled.div``;

export const Header = ({ authentication, logIn, logOut }) => (
    <HeaderStyled>
        <Container>
            <HeaderInner>
                <Logo />
                {authentication ? 
                <LogOut>
                    <ButtonHeader onClick={logOut}>
                        <ButtonHeaderSecondary>
                            <ButtonHeaderSecondaryContent>Logout</ButtonHeaderSecondaryContent>
                        </ButtonHeaderSecondary>
                        <ButtonHeaderPrimary>
                            <ButtonHeaderIcon src={authentication.photoURL} alt={authentication.displayName} style={{ padding: "0", background: "transparent"}} />
                        </ButtonHeaderPrimary>    
                    </ButtonHeader>
                </LogOut> :
                <ButtonHeader onClick={logIn}>
                    <ButtonHeaderSecondary>
                        <ButtonHeaderSecondaryContent>Login</ButtonHeaderSecondaryContent>
                    </ButtonHeaderSecondary>
                    <ButtonHeaderPrimary>
                        <ButtonHeaderIcon src={buttonIcon} alt='icon'/>
                    </ButtonHeaderPrimary>
                </ButtonHeader>}
            </HeaderInner>
        </Container>
    </HeaderStyled>
);