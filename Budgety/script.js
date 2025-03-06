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
    value: inputValueEl.value,
  };
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  // const {type, desc, value} = getInputs()
  const formValues = getInputs();

  // const type = formValues.type
  // const description = formValues.desc
  // const value = formValues.value

  // Object Destructuring
  const { type, desc: description, value } = formValues;

  if (type && description && value) {
    // Generate a radom unique ID
    let id = crypto.randomUUID();

    // Push the id, description & value into appropriate data.items array i.e income or expenses
    // data.items[type].push({ id, description, value });

    if (type == "income") {
      data.items.income.push({ id, description, value });
    } else {
      data.items.expenses.push({ id, description, value });
    }
    console.log(data);

    // Clear form fields
    inputDescriptionEl.value = "";
    inputValueEl.value = "";

    // Update UI
    addNewItem(id, type, description, value);
  } else {
    alert("Please input valid description and amount");
  }
});

function addNewItem(id, type, desc, value) {
  const html = `
    <div class="item" id="${id}">
    <div class="item__description">${desc}</div>
    <div class="item__values-container">
      <div class="item__value" data-value="${value}">${value}</div>
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
