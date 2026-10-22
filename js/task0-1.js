// ===== Task 0. First Script =====
const studentName = "Dastan Abdasim";
const studentGroup = "YOUR-GROUP"; // TODO: replace with your group

console.log("Name: " + studentName);
console.log("Group: " + studentGroup);

document.getElementById("alertBtn").addEventListener("click", function () {
  alert("Hello, JavaScript World!");
});

alert("Hello, JavaScript World!");

// ===== Task 1. Variables & Operators =====
function runVariables() {
  const lines = [];
  // Helper: print to console AND to the page
  const log = (text) => {
    console.log(text);
    lines.push(text);
  };

  // Different data types
  const firstName = "Dastan";      // string
  const age = 19;                  // number
  const isStudent = true;          // boolean

  log("--- Data types ---");
  log("firstName = " + firstName + " (" + typeof firstName + ")");
  log("age = " + age + " (" + typeof age + ")");
  log("isStudent = " + isStudent + " (" + typeof isStudent + ")");

  // Arithmetic operations
  const a = 15;
  const b = 4;
  log("--- Arithmetic (a = " + a + ", b = " + b + ") ---");
  log("a + b = " + (a + b));
  log("a - b = " + (a - b));
  log("a * b = " + (a * b));
  log("a / b = " + (a / b));
  log("a % b = " + (a % b));
  log("a ** b = " + (a ** b));

  // String concatenation
  const lastName = "Abdasim";
  const fullName = firstName + " " + lastName;
  log("--- Strings ---");
  log("Concatenation (+): " + fullName);
  log(`Template literal: Hello, ${fullName}! You are ${age} years old.`);

  document.getElementById("varsOutput").textContent = lines.join("\n");
}

document.getElementById("runVarsBtn").addEventListener("click", runVariables);
runVariables();
