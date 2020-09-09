import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './components/Style/GlobalStyle';
import { ModalItem } from './components/Modal/ModalItem';
import { Order } from './components/Order/Order';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';
import { useAuth } from './components/Hooks/useAuth';
import { useTitle } from './components/Hooks/useTitle';
import { useDB } from './components/Hooks/useDB';

const firebaseConfig = {
	apiKey: "AIzaSyDd61Dxc0XY2ziMrdW2fbJRMwQndlu2d0I",
	authDomain: "bakecake-dee3d.firebaseapp.com",
	databaseURL: "https://bakecake-dee3d.firebaseio.com",
	projectId: "bakecake-dee3d",
	storageBucket: "bakecake-dee3d.appspot.com",
	messagingSenderId: "661891515759",
	appId: "1:661891515759:web:104023d28aa2fd0268549a"
};

firebase.initializeApp(firebaseConfig);

function App() {
	const auth = useAuth(firebase.auth);
	const openItem = useOpenItem();
	const orders = useOrders();
	const database = firebase.database();
	useTitle(openItem.openItem);
	const dbMenu = useDB(database);

 	return (
		<>
			<GlobalStyle />
				<Order
					{...orders} 
					{...openItem} 
					{...auth}
					database={database}
				/>
				<Header {...auth}/>
				<Menu {...openItem} dbMenu={dbMenu} />
				{ openItem.openItem && <ModalItem {...openItem} {...orders} />}
		</>
  	);
}

export default App;