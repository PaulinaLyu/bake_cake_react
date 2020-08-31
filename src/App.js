import React from 'react';
import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';
import { ModalItem } from './components/ModalItem';
import { Order } from './components/Order';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';


function App() {

	const openItem = useOpenItem();
	const orders = useOrders();

 	return (
		<>
			<GlobalStyle />
			<NavBar />
			<Order {...orders} />
			<Menu {...openItem} />
			{ openItem.openItem && <ModalItem {...openItem} {...orders} />}
		</>
  	);
}

export default App;