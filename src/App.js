import React, { useState } from "react";
import "./App.css";

import Header from "../src_components/Header";
import ExpenseForm from "../src_components/ExpenseForm";
import ExpenseList from "../src_components/ExpenseList";
import Receipt from "../src_components/Receipt";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="app">
      <Header />

      <ExpenseForm addExpense={addExpense} />

      <ExpenseList expenses={expenses} />

      <Receipt expenses={expenses} />
    </div>
  );
}

export default App;
