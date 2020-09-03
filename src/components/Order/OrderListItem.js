import React from 'react';
import styled from 'styled-components';
import trashIcon from '../../img/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.div`
	display: flex;
	margin: 15px 0;
	cursor: pointer;
`;

const ItemInfo = styled.div`
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const ItemName = styled.div`
	flex-grow: 1;
`;

const ItemPrice = styled.div`
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

const Choice = styled.span`
	margin-left: 10px;
	font-size: 16px;
	color: #9a9a9a;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
	const topping = order.topping.filter(item => item.checked)
		.map(item => item.name)
		.join(', ');
		
	return (
		<OrderItemStyled>
			<ItemInfo onClick={() => setOpenItem({...order, index})}>
				<ItemName>
					{order.name} 
					<Choice>{order.choice}</Choice>
				</ItemName>
				<span>{order.count}</span>
				<ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
				{topping && <Toppings>{topping}</Toppings>}
			</ItemInfo>
			<TrashButton onClick={() => deleteItem(index)} />
		</OrderItemStyled>
)} ;