import React from 'react';
import data from './data';

function CompanyList() {
  let companies = data.companies;
  return companies.map(function(company) {
    let companyCardKey = 'companyCard' + companies.indexOf(company);
    let companyCardHeaderKey = 'companyCardHeader' + companies.indexOf(company);
    let companyCardBodyKey = 'companyCardBody' + companies.indexOf(company);
    return (
      <div id="companyCard" className="card" key={companyCardKey}>
        <div
          id="companyCardHeader"
          className="cardHeader"
          key={companyCardHeaderKey}
        >
          {company.name}
        </div>
        <div id="companyCardBody" className="cardBody" key={companyCardBodyKey}>
          Based in {company.state}
        </div>
      </div>
    );
  });
}

export default CompanyList;
