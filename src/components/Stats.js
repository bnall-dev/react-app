import React from 'react';
import data from './data';

function Stats() {
  let mostUsers = 0;
  let mostUsersState;
  for (let i = 0; i < data.users.length; i++) {
    let users = data.users.filter(function(user) {
      return user.state === data.users[i].state;
    });
    if (users.length > mostUsers) {
      mostUsers = users.length;
      mostUsersState = data.users[i].state;
    } else {
    }
  }

  let mostCompanies = 0;
  let mostCompaniesState;
  for (let i = 0; i < data.companies.length; i++) {
    let companies = data.companies.filter(function(company) {
      return company.state === data.companies[i].state;
    });

    if (companies.length > mostCompanies) {
      mostCompanies = companies.length;
      mostCompaniesState = data.companies[i].state;
    } else {
    }
  }

  let mostProducts = 0;
  let mostProductsMaterial;
  for (let i = 0; i < data.products.length; i++) {
    let products = data.products.filter(function(product) {
      return product.material === data.products[i].material;
    });

    if (products.length > mostProducts) {
      mostProducts = products.length;
      mostProductsMaterial = data.products[i].material;
    } else {
    }
  }

  return (
    <div id="statsList" className="list">
      <div id="mostUsers" className="card">
        The most popular state for users is {mostUsersState} with {mostUsers}{' '}
        users.
      </div>
      <div id="mostCompanies" className="card">
        The most popular state for companies is {mostCompaniesState} with{' '}
        {mostCompanies} companies.
      </div>
      <div id="mostMaterial" className="card">
        The most common material for products is {mostProductsMaterial} with{' '}
        {mostProducts} products.
      </div>
    </div>
  );
}

export default Stats;
