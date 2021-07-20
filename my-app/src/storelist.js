import React from 'react';
import stores from "./data/stores";
import Store from './Store';
import './App.css';

function StoreList({stores}){
    return(
        <table>
            <caption></caption>
            <thead >
                <tr >
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </tr>

            </thead>
            <tbody>
                {stores.map((store,i) => <Store store ={store} key={i}></Store>)}
            </tbody>

        </table>
    );
}

export default StoreList;