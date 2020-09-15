import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import trashIcon from '../../img/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';
import { device } from '../Style/MediaQuery';

const OrderItemStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 15px 0;
	cursor: pointer;
`;

const ItemMain = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
`;

const ItemName = styled.div`
	flex-grow: 1;
	font-size: 18px;
	font-weight: 700;

	@media ${device.mobileL} { 
		font-size: 16px;
	}
`;

const ItemPrice = styled.div`
	margin-left: 20px;
	margin-right: 10px;
	min-width: 65px;
	text-align: right;
	font-weight: 700;
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

export const OrderListItem = ({ order, index, deleteItem }) => {
	const { openItem: { setOpenItem } } = useContext(Context);
	
	const topping = order.topping.filter(item => item.checked)
		.map(item => item.name)
		.join(', ');

	const refDeleteButton = useRef(null); 

	return (
		<OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
			<ItemMain>
				<ItemName>
					{order.name} 
					<Choice>{order.choice}</Choice>
				</ItemName>
				<span>{order.count}</span>
				<ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
				<TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)} />
			</ItemMain>
			{topping && <Toppings>{topping}</Toppings>}
		</OrderItemStyled>
)} ;