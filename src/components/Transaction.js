import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <div>
      <li className="minus">
        {transaction.text} <span>400NOK</span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
};

export default Transaction;
