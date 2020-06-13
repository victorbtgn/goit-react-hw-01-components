import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = ({ item }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {item.map(({ id, type, amount, currency }) => {
        return (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default TransactionHistory;
