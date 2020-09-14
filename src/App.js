import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './components/Style/GlobalStyle';
import { ModalItem } from './components/Modal/ModalItem';
import { Order } from './components/Order/Order';
import { OrderConfirm } from './components/Order/OrderConfirm';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';
import { useAuth } from './components/Hooks/useAuth';
import { useTitle } from './components/Hooks/useTitle';
import { useOrderConfirm } from './components/Hooks/useOrderConfirm';
import { Context } from './components/Functions/context';

const firebaseConfig = {
	apiKey: "AIzaSyDj8zRYwOGcytpWLEekyVq1pWgZPz0-brw",
	authDomain: "bakecake-2b4d3.firebaseapp.com",
	databaseURL: "https://bakecake-2b4d3.firebaseio.com",
	projectId: "bakecake-2b4d3",
	storageBucket: "bakecake-2b4d3.appspot.com",
	messagingSenderId: "741812838811",
	appId: "1:741812838811:web:2158488d4ef2f62a03813e"
};

firebase.initializeApp(firebaseConfig);

function App() {
	const auth = useAuth(firebase.auth);
	const openItem = useOpenItem();
	const orders = useOrders();
	const orderConfirm = useOrderConfirm();
	useTitle(openItem.openItem);

 	return (
		<Context.Provider value={{
			auth,
			openItem,
			orders,
			orderConfirm,
			firebaseDatabase: firebase.database,
		}}>
			<GlobalStyle />
				<Order />
				<Header />
				<Menu  />
				{openItem.openItem && <ModalItem />}
				{orderConfirm.openOrderConfirm && <OrderConfirm  />}
		</Context.Provider>
  	);
}

export default App;