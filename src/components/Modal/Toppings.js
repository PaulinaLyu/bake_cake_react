import React from 'react';
import styled from 'styled-components';
import { ExtraWrap, ExtraLabel, ExtraInput } from './Extra';

const ToppingWrap = styled(ExtraWrap)``;
const ToppingLabel = styled(ExtraLabel)``;
const ToppingCheckbox = styled(ExtraInput)``;

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