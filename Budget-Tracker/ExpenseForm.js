import React, { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;
    onAddExpense(amount);
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">- Add Expense</button>
    </form>
  );
}
