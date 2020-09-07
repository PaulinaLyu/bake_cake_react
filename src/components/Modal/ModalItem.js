import React from 'react';
import styled from 'styled-components';
import { Button } from '../Essentials/Button';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { formatCurrency } from '../Functions/secondaryFunction';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { Container } from '../Style/GlobalStyle';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left:0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	z-index: 20;
`;

const Modal = styled.div`
	width: 600px;
	background-color: #fff;
`;

const Banner = styled.div`
	width: 100%;
	height: 200px;
	background-image: url(${({img}) => img});
	background-size: cover;
	background-position: center;
`;

const ModalInner = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: calc(100% - 200px);
	padding: 30px;
`;

const ModalTitle = styled.h2``;
const ModalInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ModalDescription = styled.p`
	margin-top: 15px;
	margin-bottom: 15px;
	font-family: 'Raleway', sans-serif;
`;

const ModalCount = styled.div`
	display: flex;
	justify-content: space-between;
	align-item: center;
	margin-top: 15px;
	margin-bottom: 27px;
`;

const ModalPrice = styled.div`
	font-size: 24px;
	font-weight: 600;
	color: #AD7D52;
`;

const TotalPriceItem = styled.div`
	display: flex;
	align-items: center;
`;

const TotalPriceItemTitle = styled.h4`
	font-size: 20px;
	margin-right: 10px;
`;

const TotalPriceItemValue = styled.div`
	font-size: 22px;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

	const counter = useCount(openItem);
	const toppings = useToppings(openItem);
	const choices = useChoices();
	const isEdit = openItem.index > -1;

	const closeModal = e => {
		if (e.target.id === 'overlay') {
			setOpenItem(null);
		}
	}

	const order = {
		...openItem,
		count: counter.count,
		topping: toppings.toppings,
		choice: choices.choice
	};

	const editOrder = () => {
		const newOrders = [...orders];
		newOrders[openItem.index] = order;
		setOrders(newOrders);
		setOpenItem(null);
	}

	const addToOrder = () => {
		setOrders([...orders, order])
		setOpenItem(null);
	}

	return (
		<Overlay id="overlay" onClick={closeModal}>
			<Modal>
				<Banner img={openItem.img} />
				<Container>
					<ModalInner>
						<ModalInfo>	
							<ModalTitle>{openItem.name}</ModalTitle>			
							<ModalPrice>{formatCurrency(openItem.price)}</ModalPrice>
						</ModalInfo>
						<ModalDescription>{openItem.description}</ModalDescription>
						<ModalCount>
							<CountItem {...counter}/>
							<TotalPriceItem>
								<TotalPriceItemTitle>Price:</TotalPriceItemTitle>
								<TotalPriceItemValue>{formatCurrency(totalPriceItems(order))}</TotalPriceItemValue>
							</TotalPriceItem>
						</ModalCount>
						{openItem.toppings && <Toppings {...toppings} />}
						{openItem.choices && <Choices {...choices} openItem={openItem} />}
						<Button onClick={isEdit ? editOrder : addToOrder}
								disabled={order.choices && !order.choice}
								>{isEdit ? "Make changes" : "Add to cart"}</Button>
					</ModalInner>
				</Container>
			</Modal>
		</Overlay>
	)
};