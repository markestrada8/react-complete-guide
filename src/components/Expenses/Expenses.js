import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter"
import Card from '../UI/Card';

function Expenses(props) {
  const [year, setYear] = useState('2021')

  const onSaveYear = (savedData) => {
    const yearData = savedData;
    setYear(yearData)
  }

  return (
    <div>

      <Card className="expenses">
        <ExpensesFilter onSaveYear={onSaveYear} selected={year} />
        {props.expenses.map(expense => {
          return (

            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />

          )
        })}
      </Card>
    </div>
  )
}

export default Expenses;

