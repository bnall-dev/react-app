import React from 'react';
import data from './data';

function Header() {
  return (
    <div id="header">
      <div id="productHeader" className="header">
        Product List ({data.products.length})
      </div>
      <div id="userHeader" className="header">
        {' '}
        User List ({data.users.length})
      </div>

      <div id="companyHeader" className="header">
        Company List ({data.companies.length})
      </div>

      <div id="stats" className="header">
        Stats
      </div>
    </div>
  );
}

export default Header;
