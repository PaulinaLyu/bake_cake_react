import React, { useContext } from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';
import { device } from '../Style/MediaQuery';

const List = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin: 45px 0 0 -1.7rem;
`;

const Item = styled.article`
	flex: 1 0 25%;
	min-width: 200px;
	max-width: 378px;
	margin:0 0 1.7rem 1.7rem;
 	transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
 	background-color: #fff;
 	position: relative;
 	overflow: hidden;
	box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
	cursor: pointer;
	 
   	&:hover {
		cursore: pointer;
 		box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
	   	transform: scale(1.10, 1.10);
	}	   
`;

const ItemImg = styled.div`
	width: 100%;
	height: 235px;
	visibility: hidden;
	background-image: url('${({img}) => img}');
 	background-size: cover;
 	background-position: center;
	background-repeat: no-repeat;
`;

const ItemImgHover = styled.div`
	background-image: url('${({img}) => img}');
	transition: 0.1s all ease-out;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	position: absolute;
	height: 235px;
	top: 0;

	${Item}:hover & {
	height: 100%;
	opacity: 0.5;
	}
`;

const ItemInfo = styled.div`
	z-index: 2;
	background-color: #fff;
	padding: 16px 24px 24px 24px;

	${Item}:hover & {
		background-color: transparent;
 		position: relative;
   }
`;

const ItemCategory = styled.div`
 	font-family: 'Raleway', sans-serif;
 	text-transform: uppercase;
 	font-size: 13px;
 	letter-spacing: 2px;
 	font-weight: 500;
	color: #868686;
	 
	@media ${device.tablet} { 
		font-size: 11px;
	}
`;

const ItemTitle = styled.h3`
	margin-top: 5px;
	margin-bottom: 10px;
`;

const ItemPrice = styled.div`
   	font-size: 20px;
	font-weight: 600;
 	color: #AD7D52;
`;

export const ListItem = ({ itemList }) => {
	const { openItem: { setOpenItem } } = useContext(Context);

	return (
		<List>
			{itemList.map(item => (
				<Item 
					key={item.id}
					onClick={() => {
						setOpenItem(item);
						document.body.classList.add('no-scroll');
					}}>
					<ItemImg img={item.img} />
					<ItemImgHover img={item.img} />
					<ItemInfo>
						<ItemCategory>{item.categories}</ItemCategory>
						<ItemTitle>{item.name}</ItemTitle>
						<ItemPrice>{formatCurrency(item.price)}</ItemPrice>
					</ItemInfo>
				</Item>
			))}
		</List>
	)
};