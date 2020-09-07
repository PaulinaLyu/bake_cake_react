import React from 'react';
import styled from 'styled-components';

const CountContent = styled.div`
    display: flex;
    align-items: center;
`;

const CountTitle = styled.h4`
    font-size: 20px;
    margin-right: 15px;
`;

const CountInput = styled.input`
    padding: 4px 2px 4px 2px;
    font-size: 16px;
    background-color: #fff;
    color: #222;
    text-align: center;
    border: 3px solid #FEEED7;
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
`;

export function CountItem({ count, setCount, onChange }) {
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