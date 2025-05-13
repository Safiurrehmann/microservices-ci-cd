let token = "";

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  token = data.token;
}

async function addTodo() {
  const text = document.getElementById("todoText").value;
  const res = await fetch("/api/todo/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  loadTodos();
}

async function loadTodos() {
  const res = await fetch("/api/todo/todos");
  const todos = await res.json();
  document.getElementById("todoList").innerHTML = todos.map(t => `<li>${t.text}</li>`).join("");
}
