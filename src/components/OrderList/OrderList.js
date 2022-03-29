import React from 'react';
import DisplayOrder from '../DisplayOrder/DisplayOrder';

const OrderList = (props) => {
    const { orders, setOrders,removeItem } = props;

    
    return (
        <div>
            <h2>Order List</h2>
            <h4>Items Ordered: {orders.length}</h4>

            {
                orders.map(order =><DisplayOrder key={order.idMeal} removeItem={removeItem} order={order} ></DisplayOrder>)
            }
        </div>
    );
};

export default OrderList;