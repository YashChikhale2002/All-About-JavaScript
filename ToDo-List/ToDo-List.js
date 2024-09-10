let todoList = JSON.parse(localStorage.getItem("TodoList")) || [
  {
    name: "Yoga",
    dueDate: "2022-12-22",
  },
];
renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `<div>${name}</div> <div>${dueDate}</div>
    <button class="js-deleteTodo">Delete</button>`;
    todoListHtml += html;
  });
  document.querySelector(".js-Todo-List").innerHTML = todoListHtml;
  document.querySelectorAll(".js-deleteTodo").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      todoList.splice(index, 1);
      renderTodoList();
      locatStorage();
    });
  });
}

const addTodoList = document.querySelector(".js-addTodo");
addTodoList.addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-Input-Todo");
  const name = inputElement.value;
  const dateElement = document.querySelector(".js-Input-Date");
  const dueDate = dateElement.value;

  todoList.push({
    name,
    dueDate,
  });

  inputElement.value = "";
  dateElement.value = "";
  renderTodoList();
  locatStorage();
}

document.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    addTodo();
  }
});

function locatStorage() {
  localStorage.setItem("TodoList", JSON.stringify(todoList));
}
