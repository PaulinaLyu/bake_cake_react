import React, { useContext } from 'react';
import styled from 'styled-components';
import { ExtraContent, ExtraLabel, ExtraInput, ExtraTitle } from './Extra';
import { ContextItem } from '../Functions/contextItem';

const ToppingTitle = styled(ExtraTitle)``;
const ToppingContent = styled(ExtraContent)``;
const ToppingLabel = styled(ExtraLabel)``;
const ToppingCheckbox = styled(ExtraInput)``;

export function Toppings() {
    const { toppings: { toppings, checkToppings }} = useContext(ContextItem);

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