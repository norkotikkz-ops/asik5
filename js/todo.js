// ===== Task 8. To-Do App =====
// Tasks are stored temporarily in an array (no localStorage / database).
let tasks = [];
let nextId = 1;

const input = document.getElementById("taskInput");
const listEl = document.getElementById("taskList");
const countEl = document.getElementById("taskCount");

function addTask() {
  const text = input.value.trim();
  if (text === "") {
    input.focus();
    return;
  }
  tasks.push({ id: nextId++, text: text, completed: false });
  input.value = "";
  input.focus();
  render();
}

function toggleTask(id) {
  const task = tasks.find(function (t) { return t.id === id; });
  if (task) task.completed = !task.completed;
  render();
}

function deleteTask(id) {
  tasks = tasks.filter(function (t) { return t.id !== id; });
  render();
}

function render() {
  listEl.innerHTML = "";

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("click", function () { toggleTask(task.id); });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "danger";
    delBtn.addEventListener("click", function () { deleteTask(task.id); });

    li.appendChild(span);
    li.appendChild(delBtn);
    listEl.appendChild(li);
  });

  const done = tasks.filter(function (t) { return t.completed; }).length;
  countEl.textContent = tasks.length === 0
    ? "No tasks yet."
    : "Total: " + tasks.length + " · Completed: " + done;
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") addTask();
});

render();
