// ===== Task 2. Changing Content =====
const para = document.getElementById("textPara");
const texts = [
  "The paragraph text has been changed!",
  "JavaScript can change any text on the page.",
  "This is the original paragraph text."
];
let textIndex = 0;

document.getElementById("changeTextBtn").addEventListener("click", function () {
  para.textContent = texts[textIndex];
  textIndex = (textIndex + 1) % texts.length;
});

// ===== Task 3. Changing Styles =====
const box = document.getElementById("styleBox");
const colors = ["#fde68a", "#a7f3d0", "#bfdbfe", "#fbcfe8", "#ddd6fe", "#ffffff"];
const sizes = ["16px", "20px", "26px", "32px"];
let colorIndex = 0;
let sizeIndex = 0;

document.getElementById("bgBtn").addEventListener("click", function () {
  box.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

document.getElementById("fontBtn").addEventListener("click", function () {
  sizeIndex = (sizeIndex + 1) % sizes.length;
  box.style.fontSize = sizes[sizeIndex];
});

// ===== Task 4. Creating & Removing Elements =====
const list = document.getElementById("itemList");
let itemCounter = list.children.length;

document.getElementById("addItemBtn").addEventListener("click", function () {
  itemCounter++;
  const li = document.createElement("li");
  li.textContent = "Item " + itemCounter;
  list.appendChild(li);
});

document.getElementById("removeItemBtn").addEventListener("click", function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    itemCounter = Math.max(0, itemCounter - 1);
  }
});
