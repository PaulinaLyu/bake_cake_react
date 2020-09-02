import React from 'react';
import styled from 'styled-components';
import trashIcon from '../../img/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
	display: flex;
	flex-wrap: wrap;
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

const Toppings = styled.div`
	width: 100%;
	color: #9a9a9a;
	font-size: 14px;
`;

export const OrderListItem = ({ order }) => {
	const topping = order.topping.filter(item => item.checked)
		.map(item => item.name)
		.join(', ');

	return (
		<OrderItemStyled>
			<ItemName>{order.name} {order.choice}</ItemName>
			<span>{order.count}</span>
			<ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
			<TrashButton />
			{topping && <Toppings>{topping}</Toppings>}
		</OrderItemStyled>
)} ;