import './App.css';
import stores from './data/stores';
import items from './data/items';
import React from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom'
import ItemShopPage from './pages/ItemShopPage';
import HomePage from './pages/HomePage';
import StoresListPage from './pages/StoresListPage';



function App() {  

  return (
    <div className='App'>
    <Router>
        <header className="App-header">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/storelist">
            <StoresListPage stores={stores} />
          </Route>
          <Route path="/shoppinglist">
            <ItemShopPage items={items}/>
          </Route>
        </header>
      </Router>
  </div>
  );
 
}

export default App;
