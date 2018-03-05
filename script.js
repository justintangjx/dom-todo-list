// var tasks = ["buy milk", "eat dinner", "nail javascript"];

var todoList = document.querySelectorAll("ul")[0];
var todos = document.querySelectorAll("li");

var newTodo = document.createElement("li");
newTodo.textContent = "get fish";

todoList.appendChild(newTodo);

var form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var newItemtoadd = document.createElement("li");
  newItemtoadd.textContent = document.getElementById("newtodo").value;
  todoList.appendChild(newItemtoadd);
});



for (let i = 0; i < todos.length; i++) {
  todos[i].addEventListener("click", function() {
      
    if (todos[i].classList.contains("done")) {
      todos[i].classList.remove("done");
    } else {
      todos[i].classList.add("done");
    }
  });
};

