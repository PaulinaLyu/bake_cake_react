import styled from 'styled-components';
import { device } from '../Style/MediaQuery';

export const ExtraTitle = styled.h4`
    margin-top: 15px;
    margin-bottom: 10px;
`;

export const ExtraContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 30px;
`;

export const ExtraLabel = styled.label`
    cursor: pointer;
    display: inline-block;
    margin-right: 25px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 400;

    @media ${device.tablet} { 
        font-size: 16px;
    }
`;

export const ExtraInput = styled.input`
    margin: 0 5px 0 0;
    width: 15px;
    height: 15px;

`;