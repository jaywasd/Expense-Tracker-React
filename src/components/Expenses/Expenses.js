import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onRecievingYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return filteredYear === expense.date.getFullYear().toString();
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSetYear={onRecievingYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
