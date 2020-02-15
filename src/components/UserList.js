import React from 'react';
import data from './data';
function UserList() {
  let users = data.users;
  return users.map(function(user) {
    let userCompany = data.companies.find(function(company) {
      return company.id === user.companyId;
    });

    let userCardKey = 'userCard' + users.indexOf(user);
    let userCardHeaderKey = 'userCardHeader' + users.indexOf(user);
    let userCardBodyKey = 'userCardBody' + users.indexOf(user);

    return (
      <div id="userCard" className="card" key={userCardKey}>
        <div id="userCardHeader" className="cardHeader" key={userCardHeaderKey}>
          {user.name}
        </div>
        <div id="userCardBody" className="cardBody" key={userCardBodyKey}>
          {user.name} from {user.state} works for {userCompany.name}
        </div>
      </div>
    );
  });
}

export default UserList;
