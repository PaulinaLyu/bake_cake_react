import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Style/AdditionalStyles';
import { Total, TotalPrice } from '../Style/AdditionalStyles';
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

const Title = styled.h3`
    text-align: center;
    margin-bottom: 20px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
    font-weight: 400;
    line-height: 150%;
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
    dataBase.ref('orders').push().set({
        nameCustomer: authentication.displayName,
        email: authentication.email,
        order: newOrder
    })
}

export const OrderConfirm = () => {
    const { orders: { orders, setOrders },
			auth: { authentication },
            orderConfirm: { setOpenOrderConfirm },
            firebaseDatabase,
    } = useContext(Context);

    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order)=>totalPriceItems(order)+ result, 0);

    const closeConfirm = e => {
        if (e.target.id === 'overlay') {
            setOpenOrderConfirm(false);
        }
    }
    
    return (
        <Overlay id="overlay" onClick={closeConfirm}>
            <Modal>
                <Title>{authentication.displayName}</Title>
                <Text>Please, confirm your order</Text>
                <Total style={{ justifyContent: "center" }}>
                    <h3>Total</h3>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <Button onClick={() => {
                    sendOrder(dataBase, orders, authentication);
                    setOrders([]);
                    setOpenOrderConfirm(false);
                }}>
                    Confirm
                </Button>
            </Modal>
            {/* <Modal>
                <Title>{authentication.displayName}</Title>
                <Text>Thank you for choosing us</Text>
                <Text style={{ fontSize: "16px" }}>Please, check your email ({authentication.email}), a letter with your order is already waiting for you there</Text>
            </Modal> */}
        </Overlay>
    )
}