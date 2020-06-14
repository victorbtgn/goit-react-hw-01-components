import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ item }) => (
  <table className={styles.transactionHistory}>
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
