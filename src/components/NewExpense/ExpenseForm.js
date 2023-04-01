import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangehandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new_expense__control">
          <label>Title</label>
          <input type="text " onChange={titleChangeHandler} />
        </div>
        <div className="new_expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amounChangeHandler}
          />
        </div>
        <div className="new_expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-12-02"
            max="2023-12-02"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// import React from "react";
// import "./ExpenseForm.css";

// const ExpenseForm = () => {
//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" />
//         </div>

//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type="number" min="0.01" step="0.01" />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input type="date" min="2019-01-29" max="2022-12-12" />
//         </div>
//       </div>

//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;
