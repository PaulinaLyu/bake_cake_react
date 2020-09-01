import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ToppingLabel = styled.label`
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
`;

const ToppingCheckbox = styled.input`
    margin-right: 5px;
`;

export function Toppings({ toppings, checkToppings }) {
    return (
        <>
            <h3>Toppings</h3>
            <ToppingWrap>
                {toppings.map((item, i) => (
                    <ToppingLabel key={i}>
                        <ToppingCheckbox
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => checkToppings(i)}
                            />
                        {item.name}
                    </ToppingLabel>
                ))}
            </ToppingWrap>
        </>
    )
}