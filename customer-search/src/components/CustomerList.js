import React, { Component } from "react";

class CustomerList extends Component {
  render() {
    if (this.props.customers.length === 0) {
      return (
        <div className="layout-column align-items-center justify-content-start">
          <p data-testid="no-results">No Results Found!</p>
        </div>
      );
    }

    return (
      <div className="layout-column align-items-center justify-content-start">
        <div className="card w-55 pt-30 pb-8 mt-20">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
                <th>Gender</th>
                <th>Income</th>
              </tr>
            </thead>
            <tbody data-testid="searched-customers">
              {this.props.customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>{customer.age}</td>
                  <td>{customer.location}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.income}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CustomerList;
