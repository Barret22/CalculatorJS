let display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

function appendDot() {
  const tokens = display.value.split(/[\+\-\*\/]/);
  const lastToken = tokens[tokens.length - 1];
  if (!lastToken.includes(".")) {
    display.value += ".";
  }
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value === "") return;

    const result = eval(display.value);

    if (!isFinite(result)) {
      display.value = "Помилка";
    } else {
      display.value = result;
    }
  } catch (e) {
    display.value = "Помилка";
  }
}
