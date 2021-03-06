import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextItem } from '../Functions/contextItem';
import { device } from '../Style/MediaQuery';

const CountContent = styled.div`
    display: flex;
    align-items: center;

    @media ${device.tablet} { 
		margin-bottom: 30px;
    }
    
    @media ${device.mobileL} { 
		margin-bottom: 15px;
	}
`;

const CountTitle = styled.h3`
    margin-right: 15px;
`;

const CountInput = styled.input`
    padding: 5px 2px 5px 2px;
    font-size: 16px;
    background-color: #fff;
    color: #222;
    text-align: center;
    border: 2px solid #FEEED7;

    @media ${device.tablet} { 
        padding: 3px 2px 3px 2px;
		font-size: 14px;
    }
`;

const ButtonCount = styled.button`
    padding: 7px 7px 7px 7px;
    background-color: #FEEED7;
    border: 0;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    transition: background 0.4s ease;

    :hover {
        background-color: #FFDDAB;
    }

    @media ${device.tablet} { 
        padding: 5px 5px 5px 5px;
        font-size: 14px;
    }
`;

export function CountItem() {
    const { counter: { count, setCount, onChange }} = useContext(ContextItem);
    return (
        <CountContent>
            <CountTitle>Quantity:</CountTitle>
            <div>
                <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
                <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange} />
                <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
            </div>
        </CountContent>
    )
}