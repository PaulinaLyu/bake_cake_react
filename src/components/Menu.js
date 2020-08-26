import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
	margin-top: 80px;
`;

const SectionMenu = styled.section`
	padding: 30px;
`;

export const Menu = () => (
	<MenuStyled>
		<Banner></Banner>
		<SectionMenu>
			<h2>Bakery products</h2>
			<ListItem itemList = {dbMenu.burger} />
		</SectionMenu>

		<SectionMenu>
			<h2>Snacks & drinks</h2>
			<ListItem itemList = {dbMenu.other} />
		</SectionMenu>
	</MenuStyled>
);