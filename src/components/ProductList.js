import React from 'react';
import data from './data';

function ProductList() {
  let products = data.products;
  console.log(data);
  return products.map(function(product) {
    let productCardKey = 'productCard' + products.indexOf(product);
    let productCardHeaderKey = 'productCardHeader' + products.indexOf(product);
    let productCardBodyKey = 'productCardBody' + products.indexOf(product);
    return (
      <div id="productCard" className="card" key={productCardKey}>
        <div
          id="productCardHeader"
          className="cardHeader"
          key={productCardHeaderKey}
        >
          {product.name}
        </div>
        <div id="productCardBody" className="cardBody" key={productCardBodyKey}>
          Made from {product.material} materials
        </div>
      </div>
    );
  });
}

export default ProductList;
