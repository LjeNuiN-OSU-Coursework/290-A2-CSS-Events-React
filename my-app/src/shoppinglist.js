import React from 'react';
import items from "./data/items";
import Item from './Item';
import './App.css';
import Quantity from './Quantity'



function ShoppingList({items}){
    return(
        <table>
            <caption></caption>
            <thead>
                <tr>
                    <th className='list-container'>Name</th>
                    <th className='list-container'>Price</th>
                    <th className='list-container'>Quantity</th>
                </tr>

            </thead>
            <tbody>
                {items.map((item,i) => <Item item ={item} key={i}></Item>)}
            </tbody>

        </table>
    );
}

export default ShoppingList;