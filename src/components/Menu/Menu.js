import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { Loader } from '../Essentials/Loader';
import { Container } from '../Style/AdditionalStyles';
import { useFetch } from '../Hooks/useFetch';

const MenuStyled = styled.main`
	background-color: #D2DBDD;
`;

const SectionMenu = styled.section`
	padding: 30px 0 30px 0;
`;

export const Menu = () => {
	const res = useFetch();
	const dbMenu = res.response;

	return (
		<MenuStyled>
			<Banner />
			{res.response ?
			<Container>
				<SectionMenu>
					<h2>Cake</h2>
					<ListItem
						itemList={dbMenu.cake}
					/>
				</SectionMenu>
				<SectionMenu>
					<h2>Cupcake</h2>
					<ListItem
						itemList={dbMenu.cupcake}
					/>
				</SectionMenu>
				<SectionMenu>
					<h2>Bakery products</h2>
					<ListItem
						itemList={dbMenu.other}
					/>
				</SectionMenu>
				<SectionMenu>
					<h2>Drinks</h2>
					<ListItem
						itemList={dbMenu.drinks}
					/>
				</SectionMenu>
			</Container> : res.eror ?
			<div>Sorry, we will fix it soon...</div> :
			<Loader/>
			}
		</MenuStyled>
	)
};