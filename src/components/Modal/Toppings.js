import React from 'react';
import styled from 'styled-components';
import { ExtraContent, ExtraLabel, ExtraInput, ExtraTitle } from './Extra';

const ToppingTitle = styled(ExtraTitle)``;
const ToppingContent = styled(ExtraContent)``;
const ToppingLabel = styled(ExtraLabel)``;
const ToppingCheckbox = styled(ExtraInput)``;

export function Toppings({ toppings, checkToppings }) {
    return (
        <>
            <ToppingTitle>Toppings</ToppingTitle>
            <ToppingContent>
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
            </ToppingContent>
        </>
    )
}