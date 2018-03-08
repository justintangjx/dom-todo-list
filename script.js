// var tasks = ["buy milk", "eat dinner", "nail javascript"];

var todoList = document.querySelectorAll("ul")[0];
var todos = document.querySelectorAll("li");

var newTodo = document.createElement("li");
// newTodo.textContent = "get fish";

// todoList.appendChild(newTodo);
function clearContent() {
  document.getElementById("newtodo").value = " ";
}
var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var newItemtoadd = document.createElement("li");
  newItemtoadd.textContent = document.getElementById("newtodo").value;
  newItemtoadd.addEventListener("click", markAsDone);
  todoList.appendChild(newItemtoadd).clearContent;
});

for (let i = 0; i < todos.length; i++) {
  todos[i].addEventListener("click", markAsDone);
}

function markAsDone(e) {
  if (e.target.classList.contains("done")) {
    e.target.classList.remove("done");
  } else {
    e.target.classList.add("done");
  }
}

// function markAsDone(event) {
//   event.target.classList.add("done");
// }

// 2. getting user input and displaying new todo
// var form = document.getElementsByTagName("form")[0];
// form.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var userInput = form.elements["new todo"].value;
//   createAndDisplayItem(userInput);

//   form.elements["new todo"].value = "";
// });
