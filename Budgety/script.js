const dateLabel = ".budget__title--month";
const inputType = ".form__type";
const inputDescription = ".form__description";
const inputValue = ".form__value";

const dateLabelEl = document.querySelector(dateLabel);
const inputTypeEl = document.querySelector(inputType);
const inputDescriptionEl = document.querySelector(inputDescription);
const inputValueEl = document.querySelector(inputValue);
const formEl = document.querySelector(".form");

// Display month/year
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Initialize date constructor
const date = new Date();
const curMonth = date.getMonth();
const curYear = date.getFullYear();

dateLabelEl.textContent = `${monthNames[curMonth]}, ${curYear}`;

// Toggle input form colours on depending on type
const formInputs = document.querySelectorAll(
  `${inputType}, ${inputDescription}, ${inputValue}`,
);

inputTypeEl.addEventListener("change", () => {
  formInputs.forEach((input) => input.classList.toggle("red-focus"));
  document.querySelector(".form__btn").classList.toggle("form__btn--red");
});

// Stores all the budget data
/**
 * An object representing the financial data for the budget application.
 * @typedef {Object} Data
 * @property {Object} items - An object containing lists of expenses and income.
 * @property {Array} items.expenses - List of each expense.
 * @property {Array} items.income - List of each income.
 * @property {Object} totals - An object containing the total amounts for expenses and income.
 * @property {number} totals.expenses - Total amount of expenses.
 * @property {number} totals.income - Total amount of income.
 * @property {number} budget - The current budget value.
 * @property {number} percent - The percentage of income that has been spent. Default is -1.
 */
const data = {
  items: {
    expenses: [],
    income: [],
  },
  totals: {
    expenses: 0,
    income: 0,
  },
  budget: 0,
  percent: -1,
};

// Get form inputs
function getInputs() {
  return {
    type: inputTypeEl.value,
    desc: inputDescriptionEl.value,
    amount: Number(inputValueEl.value),
  };
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  // const {type, desc, value} = getInputs()
  const formValues = getInputs();

  // const type = formValues.type
  // const description = formValues.desc
  // const amount = formValues.amount

  // Object Destructuring
  const { type, desc: description, amount } = formValues;

  if (type && description && amount) {
    // Generate a radom unique ID
    let id = crypto.randomUUID();

    // Push the id, description & amount into appropriate data.items array i.e income or expenses
    // data.items[type].push({ id, description, amount });

    if (type == "income") {
      data.items.income.push({ id, description, amount });
    } else {
      data.items.expenses.push({ id, description, amount });
    }

    // Clear form fields
    inputDescriptionEl.value = "";
    inputValueEl.value = "";

    // Update UI
    addNewItem(id, type, description, amount);

    // UPDATE BUDGET
    updateBudgetValues();

    //  Update percentage values
    updatePercentValues();
  } else {
    alert("Please input valid description and amount");
  }
});

function addNewItem(id, type, desc, amount) {
  const html = `
    <div class="item" id="${id}">
    <div class="item__description">${desc}</div>
    <div class="item__values-container">
      <div class="item__value" data-value="${amount}">${amount}</div>
      ${type === "expenses" ? `<div class="item__percentage">0%</div>` : ""}
      <div class="item__delete">
        <button class="item__delete--btn">
          <i class="ion-ios-close-outline" id="delete--btn" data-item="${type} ${id}">
          </i>
        </button>
      </div>
    </div>
  </div>
  `;

  // Insert into the DOM
  document.querySelector(`.${type}__list`).innerHTML += html;
}

function calaculateTotal(type) {
  let sum = 0;
  data.items[type].forEach((item) => (sum += item.amount));
  data.totals[type] = sum;
}

const formatNumber = (num) => {
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

function updateBudgetValues() {
  // Calculate total income and expenses
  // Income total
  calaculateTotal("income");
  // Expense total
  calaculateTotal("expenses");
  // Budget Total
  data.budget = data.totals.income - data.totals.expenses;

  // Calculate the percentage of income spent
  if (data.totals.income > 0) {
    data.percent = Math.round(
      (data.totals.expenses / data.totals.income) * 100,
    );
  } else {
    data.percent = -1;
  }

  // Display the budget in the UI
  document.querySelector(".budget__value").textContent = formatNumber(
    data.budget,
  );
  document.querySelector(".budget__income--value").textContent = formatNumber(
    data.totals.income,
  );
  document.querySelector(".budget__expenses--value").textContent = formatNumber(
    data.totals.expenses,
  );
  const percent = document.querySelector(".budget__expenses--percentage");
  if (data.percent >= 0) {
    percent.textContent = data.percent + "%";
  } else {
    percent.textContent = "---";
  }
  console.log(data);
}

function updatePercentValues() {
  const listItems = document.querySelectorAll(".expenses__list > div");
  listItems.forEach(function (el) {
    const expense = el.querySelector(".item__value");
    const percent = el.querySelector(".item__percentage");

    if (data.totals.income > 0) {
      percent.textContent =
        Math.round((Number(expense.textContent) / data.totals.income) * 100) +
        "%";
    } else {
      percent.textContent = "---";
    }
  });
}

const deleteBtn = document.querySelector(".container");

deleteBtn.addEventListener("click", (e) => {
  if (e.target.id !== "delete--btn") {
    return;
  }

  const item = e.target.getAttribute("data-item");

  // const itemSplit = item.split(" ")
  // const type = itemSplit[0];
  // const id = itemSplit[1]
  const [type, id] = item.split(" ");

  const newData = data.items[type].filter((item) => item.id !== id);

  data.items[type] = newData;

  // Update Budget
  updateBudgetValues();

  // Update Percent
  updatePercentValues();

  // Remove element from the DOM
  document.getElementById(id).remove();
});
