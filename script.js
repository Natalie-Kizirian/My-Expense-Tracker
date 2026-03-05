const categoryInput = document.getElementById("category-input");
const amountInput = document.getElementById("amount-input");
const incomeBtn = document.getElementById("income-btn");
const expenseBtn = document.getElementById("expense-btn");
const transactionList = document.getElementById("transaction-list");

function addTransaction(type) {
  const text = categoryInput.value.trim();
  const amount = parseFloat(amountInput.value);
  if (!text || !amount || amount <= 0) return;

  //Make the List
  const li = document.createElement("li");
  const textSpan = document.createElement("span");
  const number = document.createElement("span");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", () => li.remove());

  //Check If Type is Income or Expense
  const isIncome = type === "income";
  li.classList.add(isIncome ? "income-list" : "expense-list");
  textSpan.textContent = text;
  number.textContent = `${isIncome ? "+" : "-"}${amount}€`;

  li.appendChild(textSpan);
  li.appendChild(number);
  li.appendChild(deleteBtn);
  transactionList.append(li);

  categoryInput.value = "";
  amountInput.value = "";
}

//Add event listners to Buttons
incomeBtn.addEventListener("click", () => addTransaction("income"));
expenseBtn.addEventListener("click", () => addTransaction("expense"));
