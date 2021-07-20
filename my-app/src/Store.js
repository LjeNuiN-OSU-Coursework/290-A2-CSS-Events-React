import React from 'react'
import './App.css'

function Store({store}){
    return(
            <tr>
                <td className='list-item'>{store.city}</td>
                <td className='list-item'>{store.state}</td>
                <td className='list-item'>{store.zipCode}</td>
            </tr>

        
    )
}

export default Store
