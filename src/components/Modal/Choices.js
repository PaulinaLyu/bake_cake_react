import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const ChoiceRadio = styled.input`
	cursor: pointer;
	display: inline-block;
	margin-right: 10px;
`;

const ChoiceLabel = styled.label`
	margin-right: 5px;
`;

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