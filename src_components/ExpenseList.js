import React from "react";
import "./ExpenseList.css";

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses added.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.title} - ${expense.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
