import React from 'react';
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <>
      <h1 className='App'>Welcome to Beaver Mart!!!</h1>
      <p className='App'>
            <Link to="/shoppinglist">Shop Online</Link>
        </p>
        <p className='App'>
            <Link to="/storelist">See a list of Beaver Mart Stores</Link>
        </p>
        
    </>
  );
}

export default HomePage;