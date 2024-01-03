import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [userInput,setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // })
  const [enteredTitle, setEneteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEneteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value};
    // })
  };

  const [enteredAmount, setEneteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEneteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount:event.target.value};
    // })
  };

  const [enteredDate, setEneteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEneteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    // })
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredDate:event.target.value};
    // })
  };

  const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title: enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="Date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" > Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
