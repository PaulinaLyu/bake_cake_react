import React from 'react';
import styled from 'styled-components';

const List = styled.div`
	margin-top: 45px;
	display: flex;
	justify-content: start;
	align-items: center;
	flex-wrap: wrap;
`;

const Item = styled.article`
	margin-right: 35px;
	margin-bottom: 35px;
 	transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
 	background-color: #fff;
	width: 33.3%;
	max-width: 500px;
 	position: relative;
 	overflow: hidden;
 	box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
   
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
	opacity: 0.3;
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
`;

const ItemTitle = styled.div`
	margin-top: 5px;
	margin-bottom: 10px;
`;

const ItemPrice = styled.div`
	font-weight: 600;
 	color: #AD7D52;
`;

export const ListItem = ({ itemList, setOpenItem }) => (
	<List>
		{itemList.map(item => (
			<Item 
				key={item.id}
				onClick={() => setOpenItem(item)}>
				<ItemImg img={item.img} />
				<ItemImgHover img={item.img} />
				<ItemInfo>
					<ItemCategory>Cake</ItemCategory>
					<ItemTitle>{item.name}</ItemTitle>
					<ItemPrice>{item.price.toLocaleString('ru-RU' , 
					{style: 'currency', currency: 'RUB'})}</ItemPrice>
				</ItemInfo>
			</Item>
		))}
	</List>
);