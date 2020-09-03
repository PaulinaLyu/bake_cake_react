import React from 'react';
import styled from 'styled-components';
import { ExtraWrap, ExtraLabel, ExtraInput } from './Extra';

const ChoiceWrap = styled(ExtraWrap)``;

const ChoiceLabel = styled(ExtraLabel)``;

const ChoiceRadio= styled(ExtraInput)``;

export function Choices({ openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Сhoose:</h3>
			<ChoiceWrap>
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
            </ChoiceWrap>
        </>
    )
}