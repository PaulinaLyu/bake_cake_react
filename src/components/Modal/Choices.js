import React, { useContext } from 'react';
import styled from 'styled-components';
import { ExtraContent, ExtraLabel, ExtraInput, ExtraTitle } from './Extra';
import { ContextItem } from '../Functions/contextItem';

const ChoiceTitle = styled(ExtraTitle)``;
const ChoiceContent = styled(ExtraContent)``;
const ChoiceLabel = styled(ExtraLabel)``;
const ChoiceRadio= styled(ExtraInput)``;

export function Choices() {
    const { choices: { choice, changeChoices }, openItem} = useContext(ContextItem);
    return (
        <>
            <ChoiceTitle>Сhoose</ChoiceTitle>
			<ChoiceContent>
                {openItem.choices.map((item, i) => (
                    <ChoiceLabel key={i}>
                        <ChoiceRadio
							type="radio"
							name="choices"
							checked={choice === item}
							value={item}
                            onChange={changeChoices}
                            />
                        {item}
                    </ChoiceLabel>
                ))}
            </ChoiceContent>
        </>
    )
}