import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

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
	margin-bottom: 20px;
`;

const ModalContent = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

const ModalPrice = styled.div`
	font-weight: 600;
 	color: #AD7D52;
`;

const ModalInfo = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

	function closeModal(e) {
		if (e.target.id === 'overlay') {
			setOpenItem(null);
		}
	}

	if (!openItem) return null;
	return (
		<Overlay id="overlay" onClick={closeModal}>
			<Modal>
				<Banner img={openItem.img} />
				<ModalContent>
					<ModalInfo>	
						{openItem.name}				
						<ModalPrice>{openItem.price.toLocaleString('ru-RU' , 
						{style: 'currency', currency: 'RUB'})}</ModalPrice>
					</ModalInfo>
					<Button />
				</ModalContent>
			</Modal>
		</Overlay>
	)
};

