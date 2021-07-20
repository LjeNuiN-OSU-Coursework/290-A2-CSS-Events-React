import React from 'react';
import { Link } from 'react-router-dom';
import Store from '../Store'
import StoreList from '../storelist'
import stores from '../data/stores';
import '../App.css'
import ZipCode from '../ZipCode'


function StoresListPage() {
  return (
    <>
    <h1 className='App'>List of Beaver Mart Stores</h1>
        <StoreList stores ={stores}></StoreList>
        <ZipCode></ZipCode>
        <p>
                <Link to="/">Go back to the Home page</Link>
        </p>
        
    </>
  );
}

export default StoresListPage;