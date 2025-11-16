import React, { useState } from "react";

export default function IncomeForm({ onAddIncome }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;
    onAddIncome(amount);
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Income</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">+ Add Income</button>
    </form>
  );
}
