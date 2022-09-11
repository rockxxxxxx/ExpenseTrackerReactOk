import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  function deleteExpense() {
    document.getElementsByClassName("expense-item")[0].remove();
    console.log("clicked");
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={deleteExpense}>Delete Expense</button>
    </div>
  );
}

export default ExpenseItem;
