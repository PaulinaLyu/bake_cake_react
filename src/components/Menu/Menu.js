import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { Loader } from '../Essentials/Loader';
import { Container } from '../Style/GlobalStyle';

const MenuStyled = styled.main`
	background-color: #D2DBDD;
`;

const SectionMenu = styled.section`
	padding: 30px 0 30px 0;
`;

export const Menu = ({ setOpenItem, dbMenu }) => {

	return (
		<MenuStyled>
			<Banner />
			{dbMenu ?
			<Container>
				<SectionMenu>
					<h2>Cake</h2>
					<ListItem
						itemList={dbMenu.cake}
						setOpenItem={setOpenItem}
					/>
				</SectionMenu>
				<SectionMenu>
					<h2>Cupcake</h2>
					<ListItem
						itemList={dbMenu.cupcake}
						setOpenItem={setOpenItem}
					/>
				</SectionMenu>
				<SectionMenu>
					<h2>Bakery products</h2>
					<ListItem
						itemList={dbMenu.other}
						setOpenItem={setOpenItem}
					/>
				</SectionMenu>
				<SectionMenu>
					<h2>Drinks</h2>
					<ListItem
						itemList={dbMenu.drinks}
						setOpenItem={setOpenItem}
					/>
				</SectionMenu>
			</Container> :
			<Loader/>
			}
		</MenuStyled>
	);
}