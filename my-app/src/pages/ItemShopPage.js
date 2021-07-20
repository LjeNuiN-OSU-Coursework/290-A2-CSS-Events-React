import React from 'react';
import {Link} from 'react-router-dom';
import items from '../data/items';
import Item from '../Item';
import ShoppingList from '../shoppinglist';



function ItemShopPage() {
    return (
    <>
      <h1 className='App'>Select the quantity of the items you wish to buy</h1>
     
        <ShoppingList items ={items}></ShoppingList>
      <p className='App'>
            <Link to="/">Go back to the Home Page</Link>
    </p>
    </>
  );
}

export default ItemShopPage;