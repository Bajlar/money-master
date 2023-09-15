function getInputElementValueById(elementId) {
  const elementField = document.getElementById(elementId);
  const elementFieldAmountString = elementField.value;
  const elementFieldAmount = parseFloat(elementFieldAmountString);
  elementField.value = elementFieldAmount;
  return elementFieldAmount;
}

function getTextElementValueById(elementId) {
  const elementFieldInnerText = document.getElementById(elementId);
  const elementFieldInnerTextAmountString = elementFieldInnerText.innerText;
  const elementFieldInnerTextAmount = parseFloat(
    elementFieldInnerTextAmountString
  );
  return elementFieldInnerTextAmount;
}

function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

document
  .getElementById("btn-calculator")
  .addEventListener("click", function () {
    const totalIncome = getInputElementValueById("income-text-field");
    if (isNaN(totalIncome)) {
      alert("please input a valid number");
      return;
    }

    const foodCost = getInputElementValueById("food-text-field");
    if (isNaN(foodCost)) {
      alert("please input a valid number");
      return;
    }

    const rentCost = getInputElementValueById("rent-text-field");
    if (isNaN(rentCost)) {
      alert("please input a valid number");
      return;
    }

    const clothesCost = getInputElementValueById("clothes-text-field");
    if (isNaN(clothesCost)) {
      alert("please input a valid number");
      return;
    }

    // total cost
    const totalCost = foodCost + rentCost + clothesCost;
    if (totalCost > totalIncome) {
      alert("Spend according to your income...!");
      return;
    }

    const expenses = getTextElementValueById("expenses-total");
    setElementValueById("expenses-total", totalCost);

    const balance = getTextElementValueById("balance-total");
    const currentBalanceTotal = totalIncome - totalCost;
    setElementValueById("balance-total", currentBalanceTotal);
  });

document.getElementById("btn-save").addEventListener("click", function () {
  const saveAmount = getInputElementValueById("save-text-field");
  const totalIncome = getInputElementValueById("income-text-field");

  const savingTotalAmount = ((saveAmount / 100) * totalIncome).toFixed(2);
  const saving = getTextElementValueById("saving-total");
  setElementValueById("saving-total", savingTotalAmount);

  const remaining = getTextElementValueById("remaining-balance");
  const balance = getTextElementValueById("balance-total");
  const totalBalance = (balance - savingTotalAmount).toFixed(2);
  setElementValueById("remaining-balance", totalBalance);
});