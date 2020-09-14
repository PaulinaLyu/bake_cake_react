import styled from 'styled-components';
import React from 'react';
import { keyFrameAnimation } from '../Style/KeyFrame';
import { Overlay } from '../Style/AdditionalStyles'

export const LoaderItem = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: ${keyFrameAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #FFDDAB transparent transparent transparent;
    }

    & div:nth-child(1) {
        animation-delay: -0.45s;
    }

    & div:nth-child(2) {
        animation-delay: -0.3s;
    }

    & div:nth-child(3) {
        animation-delay: -0.15s;
    }
`;

export const Loader = () => (
    <Overlay style={{ backgroundColor: "#fff" }}>
        <LoaderItem>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LoaderItem>
    </Overlay>

);