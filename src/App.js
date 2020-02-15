import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import CompanyList from './components/CompanyList';
import Stats from './components/Stats';
import './App.css';

function App() {
  return (
    <div id="container">
      <div id="header">
        <Header />
      </div>
      <div id="columns">
        <div id="productList" className="list">
          <ProductList />
        </div>
        <div id="userList" className="list">
          <UserList />
        </div>
        <div id="companyList" className="list">
          <CompanyList />
        </div>
        <div id="statsList" className="list">
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
