const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionaiersBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate_wealth");

let data = [];

// Fetch random user and add money
const getRandomUser = async () => {
  const result = await fetch("https://randomuser.me/api");
  const data = await result.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
};

// Add new object to data array
const addData = (obj) => {
  data.push(obj);

  updateDOM();
};

// Update DOM function
const updateDOM = (providedData = data) => {
  // Clear main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
};

// Format number as money
const formatMoney = (amount) => `$${(amount / 100).toFixed(2)}`;

// event listener for adding user
addUserBtn.addEventListener("click", getRandomUser);
