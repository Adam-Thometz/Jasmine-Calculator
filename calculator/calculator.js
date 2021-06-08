window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  const result = document.getElementById("monthly-payment");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  let amount = document.getElementById("loan-amount").value;
  let years = document.getElementById("loan-years").value;
  let rate = document.getElementById("loan-rate").value;
  findError(amount, years, rate);
  return {
    amount: +(amount),
    years: +(years),
    rate: +(rate),
  }
}

function findError(amount, years, rate) {
  if (isNaN(amount) || isNaN(years) || isNaN(rate)) {
    throw new Error("All inputs must be numbers!!");
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amountInit = document.getElementById('loan-amount');
  let yearsInit = document.getElementById('loan-years');
  let rateInit = document.getElementById('loan-rate');
  amountInit.value = 5000;
  yearsInit.value = 10;
  rateInit.value = 3.5;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const inputs = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(inputs))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount; // p = priniciple
  let i = (values.rate / 100) / 12; // i = interest
  let n = values.years * 12; // n = number of payments
  let monthlyPayment = ((p * i) / (1 - (1 + i)**(-n))).toFixed(2);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPay = document.getElementById('monthly-payment');
  monthlyPay.innerText = `$${monthly}`;
}
