import React from 'react';
import styled from 'styled-components';
import { Container } from '../Style/GlobalStyle';
import { Button } from '../Essentials/Button';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { projection } from '../Functions/secondaryFunction';

const OrderStyled= styled.section`
	position: fixed;
	top: 80px;
	left: -370px;
	z-index: 100;
	padding-right: 50px;
	background: #fff;
	min-width: 420px;
	max-width: 420px;
	height: calc(100% - 80px);
	box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
	transition: all 0.3s;
	background-color: #FEEED7;

	&:hover, &:focus{
		transform: translate3d(370px, 0, 0);
		animation-timing-function: 1s ease-in;
	}
`;

const OrderInner= styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 30px;
	padding-bottom: 30px;
	background-color: #fff;
	
`;

const OrderTitle= styled.h2`
	position: absolute;
	top:50%;
	right: -46px;
	transform: rotate(270deg);
	font-size: 28px;
	font-weight: 800;
`;

const OrderContent= styled.div`
	flex-grow: 1;
`;

const OrderList= styled.ul``;

const Total= styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 35px 30px;
	font-weight: 700;
	& span:first-child {
		flex-grow: 1;
	}
`;

const TotalPrice= styled.div`
	text-align: right;
	min-width: 65px;
	margin-left: 20px;
`;

const EmptyList= styled.p`
	text-align: center;
`;

const TotalTitle= styled.h3`
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
	topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
		arr => arr.length ? arr : 'no topping'],
    choice: ['choice', item => item ? item : 'no choices'],
}

export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, database }) => {

	const sendOrder = () => {
		const newOrder = orders.map(projection(rulesData));
		database.ref('order').push().set({
			nameCustomer: authentication.displayName,
			email: authentication.email,
			order: newOrder,
		})
		setOrders([]);
	}

	const deleteItem = index => {
		setOrders([...orders].filter((item,i) => index !== i));	
	}

	const total = orders.reduce((result, order)=>totalPriceItems(order)+ result, 0);
	const totalCounter = orders.reduce((result, order)=>order.count + result, 0);

	return (
		<OrderStyled>
			<OrderTitle>Your order</OrderTitle>
				<Container style={{ background: "#fff"}}>
					<OrderInner>
						<OrderContent>
						{orders.length ?
						<OrderList>
							{orders.map((order, index) => <OrderListItem
								key={index} 
								order={order} 
								deleteItem={deleteItem}
								index={index}
								setOpenItem={setOpenItem}
							/>)}
						</OrderList> :
						<EmptyList>The order list is empty</EmptyList>}
						</OrderContent>
						<Total>
							<TotalTitle>Total</TotalTitle>
							<span>{totalCounter}</span>
							<TotalPrice>{formatCurrency(total)}</TotalPrice>
						</Total>
						<Button onClick={() => {
							if (authentication) {
								sendOrder();
							} else {
								logIn();
							} 
						}}>Сheckout</Button>
					</OrderInner>
				</Container>
		</OrderStyled>
	)
}