import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { Container } from '../Style/GlobalStyle';

const MenuStyled = styled.main`
	margin-top: 80px;
	background-color: #D2DBDD;
`;

const SectionMenu = styled.section`
	padding: 30px;
`;

export const Menu = ( setOpenItem ) => {
	{console.log({setOpenItem})}
	<MenuStyled>
		<Banner />
		<Container>
		<SectionMenu>
			<h2>Bakery products</h2>
			<ListItem
				itemList={dbMenu.burger}
				setOpenItem={setOpenItem}
			/>
		</SectionMenu>

		<SectionMenu>
			<h2>Snacks & drinks</h2>
			<ListItem
				itemList={dbMenu.other}
				setOpenItem={setOpenItem}
			/>
		</SectionMenu>
		</Container>
	</MenuStyled>
};