import React from "react";

const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+0NOK</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-0NOK</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
