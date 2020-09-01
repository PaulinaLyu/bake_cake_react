import React from 'react';
import styled from 'styled-components';
import { Button } from '../Essentials/Button';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Container } from '../Style/GlobalStyle';

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
	height: 600px;
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

const ModalInfo = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ModalCount = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ModalPrice = styled.div`
	font-weight: 600;
 	color: #AD7D52;
`;


const ModalTitle = styled.h2``;


const TotalPriceItem = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const totalPriceItems = order => order.price * order.count;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

	const counter = useCount();

	const closeModal = e => {
		if (e.target.id === 'overlay') {
			setOpenItem(null);
		}
	}

	const order = {
		...openItem,
		count: counter.count
	};

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
						<ModalCount>
							<CountItem {...counter}/>
							<TotalPriceItem>
								<span>Price:</span>
								<span>{formatCurrency(totalPriceItems(order))}</span>
							</TotalPriceItem>
						</ModalCount>
						<Button onClick={addToOrder}>Add to basket</Button>
					</ModalInner>
				</Container>

			</Modal>
		</Overlay>
	)
};

