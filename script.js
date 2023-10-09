document.addEventListener("DOMContentLoaded", function () {
    const expenseForm = document.getElementById("expense-form");
    const expensesList = document.getElementById("expenses");

    expenseForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const expenseName = document.getElementById("expense-name").value;
        const expenseAmount = parseFloat(document.getElementById("expense-amount").value);

        if (expenseName && !isNaN(expenseAmount)) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${expenseName}</span>
                <span>$${expenseAmount.toFixed(2)}</span>
                <button class="delete-button">Delete</button>
            `;

            expensesList.appendChild(li);

            // Clear the form
            document.getElementById("expense-name").value = "";
            document.getElementById("expense-amount").value = "";
        }
    });

    expensesList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-button")) {
            e.target.parentElement.remove();
        }
    });
});
