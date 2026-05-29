const form = document.getElementById("expense=form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");

const transactionList = document.querySelector(".section-box ul");

let totalExpenses = 580;
let remainingBalance = 620;

const expenseCard = document.querySelectorAll(".card p")[1];
const remainingCard = document.querySelectorAll(".card p")[2];

form.addEventListener("submit", function(event) {
    Event.preventDefault();

    const name = expenseName.value;
    const amount = Number(expenseAmount.value);

    const newTransaction = document.createElement("li");
    newTransaction.textContent = `${name} - €${amount}`;
    transactionList.appendChild(newTransaction);

    totalExpenses += amount;
    remainingBalance -= amount;

    expenseCard.textContent = `€${totalExpenses}`;
    remainingCard.textContent = `€${remainingBalance}`;

    expenseName.value ="";
    expenseAmount.value = "";

});