import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '../Essentials/Button';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { formatCurrency } from '../Functions/secondaryFunction';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { Container } from '../Style/AdditionalStyles';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { Context } from '../Functions/context';
import { ContextItem } from '../Functions/contextItem';
import { Overlay } from '../Style/AdditionalStyles';
import { device } from '../Style/MediaQuery';

const Modal = styled.div`
	width: 600px;
	background-color: #fff;

	@media ${device.tablet} { 
		width: 400px;
	}
`;

const Banner = styled.div`
	width: 100%;
	height: 200px;
	background-image: url(${({img}) => img});
	background-size: cover;
	background-position: center;

	@media ${device.mobileL} { 
		display: none;
	}
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

	@media ${device.mobileL} { 
		display: none;
	}
`;

const ModalCount = styled.div`
	display: flex;
	justify-content: space-between;
	align-item: center;
	flex-wrap: wrap;
	margin-top: 15px;
	margin-bottom: 27px;

	@media ${device.tablet} { 
		flex-direction: column;
	}

	@media ${device.mobileL} { 
		margin-bottom: 20px;
	}
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

const TotalPriceItemTitle = styled.h3`
	margin-right: 10px;

`;

const TotalPriceItemValue = styled.div`
	font-size: 22px;

	@media ${device.tablet} { 
		font-size: 18px;
	}
`;


export const ModalItem = () => {
	const { openItem: { openItem, setOpenItem },
			orders: { orders, setOrders }
	} = useContext(Context);

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
		<ContextItem.Provider value={{
			toppings,
			choices,
			counter,
			openItem: openItem,
		}}>
			<Overlay id="overlay" onClick={closeModal}>
				<Modal>
					<Banner img={openItem.img} />
					<Container style={{ padding: "0 20px" }}>
						<ModalInner>
							<ModalInfo>	
								<ModalTitle>{openItem.name}</ModalTitle>			
								<ModalPrice>{formatCurrency(openItem.price)}</ModalPrice>
							</ModalInfo>
							<ModalDescription>{openItem.description}</ModalDescription>
							<ModalCount>
								<CountItem />
								<TotalPriceItem>
									<TotalPriceItemTitle>Price:</TotalPriceItemTitle>
									<TotalPriceItemValue>{formatCurrency(totalPriceItems(order))}</TotalPriceItemValue>
								</TotalPriceItem>
							</ModalCount>
							{openItem.toppings && <Toppings />}
							{openItem.choices && <Choices />}
							<Button onClick={isEdit ? editOrder : addToOrder}
									disabled={order.choices && !order.choice}
									>{isEdit ? "Make changes" : "Add to cart"}</Button>
						</ModalInner>
					</Container>
				</Modal>
			</Overlay>
		</ContextItem.Provider>
	)
};