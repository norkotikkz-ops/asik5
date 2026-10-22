// ===== Task 7. Calculator =====
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const resultEl = document.getElementById("calcResult");

function calculate() {
  resultEl.classList.remove("error");

  if (num1.value === "" || num2.value === "") {
    resultEl.textContent = "Please enter both numbers";
    resultEl.classList.add("error");
    return;
  }

  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  let result;

  switch (operator.value) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/":
      if (b === 0) {
        resultEl.textContent = "Error: division by zero";
        resultEl.classList.add("error");
        return;
      }
      result = a / b;
      break;
  }

  // round to avoid 0.1 + 0.2 = 0.30000000000000004
  result = Math.round(result * 1e10) / 1e10;
  resultEl.textContent = "Result: " + result;
}

document.getElementById("calcBtn").addEventListener("click", calculate);

document.getElementById("clearBtn").addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  operator.value = "+";
  resultEl.classList.remove("error");
  resultEl.textContent = "Result: —";
});

[num1, num2].forEach(function (input) {
  input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") calculate();
  });
});
