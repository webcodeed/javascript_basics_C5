# Budget Application

```javascript
const dateLabel = ".budget__title--month";
const inputType = ".form__type";
const inputDescription = ".form__description";
const inputValue = ".form__value";
```

These constants store the CSS selectors for various elements in the HTML. This makes it easier to reference these elements later in the code.

## Display current month & year

```javascript
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

// Returns the current month (0-11)
const curMonth = date.getMonth();

// Returns the current year
const curYear = date.getFullYear();

// Display the current month and year via the `dateLabelEl` element (e.g. January, 2021)
dateLabelEl.textContent = `${monthNames[curMonth]}, ${curYear}`;
```

The next step is to display the current date and year in the application. This is done by creating an array of month names and initializing a new date object. The current month and year are then extracted from the date object and displayed in the application.

## Toggle Input Form Colors Based on Type

```javascript
const formInputs = document.querySelectorAll(
  `${inputType}, ${inputDescription}, ${inputValue}`,
);
```

Select the input type element (i.e. income or expense), form description, and form value elements

```javascript
inputTypeEl.addEventListener("change", () => {
  formInputs.forEach((input) => input.classList.toggle("red-focus"));
  document.querySelector(".form__btn").classList.toggle("form__btn--red");
});
```

When the user loads the page, the default type is set to income. If the user changes the type to expense, the event listener will toggle the class `red-focus` on the form description and form value elements, changing their color to red.
It also toggle the class `form__btn--red` on the form button, changing its color to red.

## Data Structure for Budget:

Here, we create an object to store the entire budget data.

```javascript
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
```

1. `items`: This object contains two arrays, one for expenses and one for income. These arrays will store the individual items entered by the user.
2. `totals`: This object contains the total expenses and total income calculated from the items entered by the user.
3. `budget`: This is the total budget calculated by subtracting the total expenses from the total income.
4. `percent`: This is the percentage of the total expenses relative to the total income. It is initially set to -1.

## Handle Form Submission

We need to add an event listener to the form to handle the submission of new items (income or expenses).

```javascript
formEl.addEventListener("submit", (e) => {
  // Prevent the form from submitting and reloading the page
  e.preventDefault();
  // Step 1: Get the input values from the form
  const formValues = getInputs();
});
```

The function `getInputs()` is used to extract the input values from the form fields.

```javascript
function getInputs() {
  return {
    type: inputTypeEl.value,
    description: inputDescriptionEl.value,
    value: Number(inputValueEl.value),
  };
}
```

Returns an object containing the type (income or expense), description, and value of the item entered by the user.

```javascript
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValues = getInputs();

  // Step 2: Extract the type, description, and amount from the formValues object
  // Object Destructuring
  const { type, desc: description, amount } = formValues;
});
```

### Add the item to the data object

```javascript
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValues = getInputs();
  const { type, desc: description, amount } = formValues;

    // Step 3: Check if the type, description, and amount are not empty
  if (type && description && amount) {
    // Generate a radom unique ID
    let id = crypto.randomUUID();

    // Push the id, description & amount into appropriate data.items array i.e income or expenses

    // Alternative way to push data into the items array using the type
    // data.items[type].push({ id, description, amount });

    if (type == "income") {
      data.items.income.push({ id, description, amount });
    } else {
      data.items.expenses.push({ id, description, amount });
    }
  } else {
    alert("Please input valid description and amount");
  }
);
```

### Clear the form fields

After adding the item to the data object, we need to clear the form fields so that the user can enter new items.

```javascript
formEl.addEventListener("submit", (e) => {
  /*
    Steps 1-3
  */
    // Step 4: Clear the form fields
    inputDescriptionEl.value = "";
    inputValueEl.value = "";
    inputDescriptionEl.focus();
  }
});
```

We do not reset the input type field because the user may want to enter multiple items of the same type.

### Add new item to the UI

```javascript
// Template for adding a new item to the UI
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

formEl.addEventListener("submit", (e) => {
  /*
    Steps 1-4
  */
  // Step 5: Add the new item to the UI
  addNewItem(id, type, description, amount);
});
```

The `addNewItem()` function takes the id, type, description, and amount of the item and creates an HTML template for displaying the item in the UI. The template is then inserted into the appropriate list (income or expenses) in the DOM.

### Update Budget Values

Here, we update the total income, total expenses, and budget values in the data object.

```javascript
formEl.addEventListener("submit", (e) => {
  /*
    Steps 1-5
  */
  // Step 6: Update the budget values
  updateBudgetValues();
});
```

Function to update the budget values:

```javascript
// Function to calculate the total income or expenses
function calaculateTotal(type) {
  let sum = 0;
  data.items[type].forEach((item) => (sum += item.amount));
  data.totals[type] = sum;
}

// Format numbers with commas and decimal points
const formatNumber = (num) => {
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

// Function to update the budget values
function updateBudgetValues() {
  // Calculate total income and expenses
  // Income total
  calaculateTotal("income");
  // Expense total
  calaculateTotal("expenses");
  // Budget Total
  data.budget = data.totals.income - data.totals.expenses;

  // Calculate the percentage of income spent. If income is 0 or below, set percentage to -1
  if (data.totals.income > 0) {
    data.percent = Math.round(
      (data.totals.expenses / data.totals.income) * 100,
    );
  } else {
    data.percent = -1;
  }

  // Display the budget in the UI (User Interface)
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
}
```

`formatNumber()` function is used to format numbers with commas and decimal points.

`calaculateTotal()` function calculates the total income or expenses by summing up the amounts in the respective arrays.

`updateBudgetValues()` function calculates the total income, total expenses, budget, and percentage of income spent. It then updates these values in the UI.

### Update the each expenses percentage value

```javascript
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

formEl.addEventListener("submit", (e) => {
  /*
    Steps 1-6
  */
  // Step 7: Update the percentage values
  updatePercentValues();
});
```

## Delete an item

```javascript
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
```

This event listener listens for a click event on the delete button. When the delete button is clicked, it extracts the item type and id from the data attribute of the button. It then filters the items array to remove the item with the matching id. The budget values and percentage values are updated, and the item is removed from the DOM.
