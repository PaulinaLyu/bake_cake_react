import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '../Essentials/Button';
import { Container, Total, TotalPrice } from '../Style/AdditionalStyles';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

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

const EmptyList= styled.p`
	text-align: center;
	font-size: 18px;
`;

const TotalTitle= styled.h3`
`;

export const Order = () => {
	const { orders: { orders, setOrders },
			auth: { authentication, logIn },
			orderConfirm: { setOpenOrderConfirm },
	} = useContext(Context);
	
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
							/>)}
						</OrderList> :
						<EmptyList>The order list is empty</EmptyList>}
						</OrderContent>
						{orders.length ?
							<>
								<Total>
									<TotalTitle>Total</TotalTitle>
									<span>{totalCounter}</span>
									<TotalPrice>{formatCurrency(total)}</TotalPrice>
								</Total>
								<Button onClick={() => {
									if (authentication) {
										setOpenOrderConfirm(true);
									} else {
										logIn();
									} 
								}}>Сheckout</Button>
							</> :
							null
						}
					</OrderInner>
				</Container>
		</OrderStyled>
	)
};