import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    addExpense({
      id: Date.now(),
      title,
      amount
    });

    setTitle("");
    setAmount("");
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Expense Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
