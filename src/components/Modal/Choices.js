import React from 'react';
import styled from 'styled-components';
import { ExtraContent, ExtraLabel, ExtraInput } from './Extra';

const ChoiceContent = styled(ExtraContent)``;
const ChoiceLabel = styled(ExtraLabel)``;
const ChoiceRadio= styled(ExtraInput)``;

export function Choices({ openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Сhoose:</h3>
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