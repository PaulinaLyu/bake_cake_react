import React from 'react';
import styled from 'styled-components';
import { Button } from '../Essentials/Button';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Container } from '../Style/GlobalStyle';

const OrderStyled = styled.section`
	position: fixed;
	top: 80px;
	left: -320px;
	z-index: 100;
	padding-right: 50px;
	background: #fff;
	min-width: 380px;
	height: calc(100% - 80px);
	box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
	transition: all 0.3s;

	&:hover, &:focus{
		transform: translate3d(320px, 0, 0);
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
	
`;

const OrderTitle= styled.h2`
	position: absolute;
	top:50%;
	right: -40px;
	transform: rotate(270deg);
	font-weight: 800;
`;

const OrderContent= styled.div`
	flex-grow: 1;
`;

const OrderList= styled.ul``;

const Total= styled.div`
	display: flex;
	margin: 0 35px 30px;
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


export const Order = ({ orders }) => {
	
	const total = orders.reduce((result, order)=>totalPriceItems(order)+ result, 0)

	return (
		<OrderStyled>
			<OrderTitle>Your order</OrderTitle>
				<Container>
					<OrderInner>
						<OrderContent>
						{orders.length ?
						<OrderList>
							{orders.map(order => <OrderListItem order= {order} />)}
						</OrderList> :
						<EmptyList>The order list is empty</EmptyList>}
						</OrderContent>
						<Total>
							<span>Total</span>
							<span>5</span>
							<TotalPrice>{formatCurrency(total)}</TotalPrice>
						</Total>
						<Button>Сheckout</Button>
					</OrderInner>
				</Container>
		</OrderStyled>
	)
}