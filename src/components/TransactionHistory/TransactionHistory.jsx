import React from "react";
import styles from "./TransactionHistory.module.css";  

const TransactionHistory = ({ items }) => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <table className={styles.table}> 
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td>{capitalizeFirstLetter(transaction.type)}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;