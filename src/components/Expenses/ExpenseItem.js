import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

function ExpenseItem(props) {
  const [title, setTitle] = useState('Start')

  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expensePrice = 294.67

  const clickHandler = () => {
    const newTitle = "Updated!"
    setTitle(title => {
      return newTitle
    })
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <div>{title}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem;