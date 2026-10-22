// ===== Task 5. Mouse Events =====
const hoverBox = document.getElementById("hoverBox");
const originalColor = "#60a5fa";
const hoverColor = "#f97316";

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = hoverColor;
  hoverBox.textContent = "Mouse is over the box!";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = originalColor;
  hoverBox.textContent = "Hover over me";
});

// ===== Task 6. Keyboard Events =====
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("keyup", function () {
  liveOutput.textContent = liveInput.value;
});
