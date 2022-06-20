import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const handleChange = (event) => {
    const newData = event.target.value;
    //   setFormData({
    //     ...formData,
    //     [event.target.name]: newData
    //   })
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: newData
      }
    })
  }

  // const handleAmountChange = (event) => {
  //   const newData = event.target.value
  //   setAmount(newData)
  // }

  // const handleDateChange = (event) => {
  //   const newData = event.target.value
  //   setDate(newData)
  // }

  const submitHandler = (event) => {
    const expenseData = {
      ...formData,
      date: new Date(formData.date)
    }
    console.log(expenseData)
    setFormData({
      title: '',
      amount: '',
      date: ''
    })
    props.onSaveExpenseData(expenseData)
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <h3>{formData.title} {formData.amount} {formData.date}</h3>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={formData.title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleChange}
            name="amount"
            value={formData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleChange}
            name="date"
            value={formData.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;