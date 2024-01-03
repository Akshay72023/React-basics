import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );

  //   return (
  //     <Card className='expense-item'>
  //       <ExpenseDate date={props.date} />
  //       <div className='expense-item__description'>
  //         <h2>{props.title}</h2>
  //         <div className='expense-item__price'>${amount}</div>
  //         <button onClick={clickHandler}>Change price</button>
  //       </div>
  //     </Card>
  //   );
};

export default ExpenseItem;
