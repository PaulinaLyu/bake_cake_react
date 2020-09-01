import React from 'react';
import styled from 'styled-components';

const CountContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const CountLabel = styled.label`
    text-align: center;
    width: 100%;
`;

const CountInput = styled.input`
    padding: .5em 1em .5em;
    font-size: 20px;
    background-color: #fff;
    color: #222;
    text-align: center;
    border: 2px solid #FEEED7;

`;

const ButtonCount = styled.button`
    padding: .6em 1em .65em;
    background-color: #FEEED7;
    border: 0;
    cursor: pointer;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    transition: background 0.4s ease;

        :hover {
        background-color: #background: #444;
    }
`;

export function CountItem({ count, setCount, onChange }) {
    return (
        <CountContent>
            <CountLabel>Quantity</CountLabel>
            <div>
                <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
                <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange} />
                <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
            </div>
        </CountContent>
    )
}