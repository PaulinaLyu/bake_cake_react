import React from 'react';
import styled from 'styled-components';
import trashIcon from '../img/trash.svg'

const OrderItemStyled = styled.li`
	display: flex;
	margin: 15px 0;
`;

const ItemName = styled.li`
	flex-grow: 1;
`;

const ItemPrice = styled.li`
	margin-left: 20px;
	margin-right: 10px;
	min-width: 65px;
	text-align: right;
`;

const TrashButton = styled.button `
	width: 24px;
	height: 24px;
	border-color: transparent;
	background-color: transparent;
	background-image: url(${trashIcon});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	cursor: pointer;
`;

export const OrderListItem = ({ order }) => (
	<OrderItemStyled>
		<ItemName>{order.name}</ItemName>
		<span>2</span>
		<ItemPrice>{order.price.toLocaleString('ru-RU' , 
					{style: 'currency', currency: 'RUB'})}</ItemPrice>
		<TrashButton />
	</OrderItemStyled>
);