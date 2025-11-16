import React from "react";

export default function Summary({
  incomes,
  expenses,
  totalIncome,
  totalExpenses,
  balance,
}) {
  return (
    <div>
      <h2>Summary</h2>

      <div>
        <div>
          <h3>Income</h3>
          <p>{totalIncome.toFixed(2)}</p>
        </div>
        <div>
          <h3>Expenses</h3>
          <p>{totalExpenses.toFixed(2)}</p>
        </div>
        <div>
          <h2>Balance</h2>
          <p>{balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
