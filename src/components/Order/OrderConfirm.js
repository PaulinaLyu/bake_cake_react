import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Style/AdditionalStyles';
import { OrderTitle, Total, TotalPrice } from '../Style/AdditionalStyles';
import { Button } from '../Essentials/Button';
import { projection } from '../Functions/secondaryFunction';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
	topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
		arr => arr.length ? arr : 'no topping'],
    choice: ['choice', item => item ? item : 'no choices'],
}

const sendOrder = (dataBase, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('order').push().set({
        nameCustomer: authentication.displayName,
        email: authentication.email,
        order: newOrder,
    })
}

export const OrderConfirm = ( firebaseDatabase ) => {
    const { orders: { orders, setOrders },
			auth: { authentication },
			orderConfirm: { setOpenOrderConfirm } } = useContext(Context);

    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order)=>totalPriceItems(order)+ result, 0);

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Please, confirm your order.</Text>
                <Total>
                    <span>Total</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <Button onClick={() => {
                    sendOrder(dataBase, orders, authentication);
                    setOrders([]);
                }}>
                    Confirm
                </Button>
            </Modal>
        </Overlay>
    )
}