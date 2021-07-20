import React from 'react'
import './App.css'
import Quantity from './Quantity'


function Item({item}){
    return(
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <Quantity></Quantity>
                </td>
            </tr>

        
    )
}

export default Item