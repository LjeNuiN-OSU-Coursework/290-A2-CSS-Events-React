import React from 'react';
import Item from './Item';
import './App.css';


function ShoppingList({items}){
    return(
        <table>
            <caption>Store</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>

            </thead>
            <tbody>
                {items.map((item,i) => <Item item ={item} key={i}></Item>)}
            </tbody>

        </table>
    );
}

export default ShoppingList;