"use strict";
// console.log("Script is Working");

const submitAction = document.getElementById("submit-button");
const display = document.getElementById("todo-display");
submitAction.addEventListener("click", (event) => {
  event.preventDefault(); // avoid refreshing the page
  event.stopPropagation(); // prevent Event Bubbling
  const todoBox = document.createElement("div");
  todoBox.setAttribute("class", "todo-box");
  const todoInput = document.querySelector("#task-name");
  const todoName = document.createElement("h3");
  todoName.textContent = todoInput.value;
  if (!todoName.textContent) {
    alert("Empty Task Cannot Be Created...!");
    return;
  }
  const btnGroup = document.createElement("div");
  btnGroup.setAttribute("id", "btn-grp");

  const markAsDone = document.createElement("button");
  markAsDone.textContent = "Mark Done";
  markAsDone.addEventListener("click", () => {
    todoBox.style.border = "1px solid greenyellow";
    alert("Task Marked As Done");
  });
  const markAsInProgress = document.createElement("button");
  markAsInProgress.textContent = "Mark In Progress";
  markAsInProgress.addEventListener("click", () => {
    todoBox.style.border = "1px solid yellow";
    alert("Task Marked As In Progress");
  });
  const markAsPending = document.createElement("button");
  markAsPending.textContent = "Mark Pending";
  markAsPending.addEventListener("click", () => {
    todoBox.style.border = "1px solid red";
    alert("Task Marked As Pending");
  });
  const prioritizeTask = document.createElement("button");
  prioritizeTask.textContent = "Prioritize";
  prioritizeTask.addEventListener("click", () => {
    //Wrong Logic
    // const currentTodoBox = document.querySelector(".todo-box");
    const currentTodoBox = todoBox;
    const element = currentTodoBox.previousElementSibling;
    console.log(element);
    if (element) {
      display.insertBefore(currentTodoBox, element);
    }
  });
  const neglectTask = document.createElement("button");
  neglectTask.textContent = "Neglect";
  neglectTask.addEventListener("click", () => {
    //Wrong Logic
    // const currentTodoBox = document.querySelector(".todo-box");
    const currentTodoBox = todoBox;
    const element = currentTodoBox.nextElementSibling;
    console.log(element);
    if (element) {
      display.insertBefore(element, currentTodoBox);
    }
  });
  const deleteTask = document.createElement("button");
  deleteTask.textContent = "Delete";
  deleteTask.addEventListener("click", () => {
    const currentTodoBox = todoBox;
    currentTodoBox.remove();
  });
  btnGroup.append(
    markAsDone,
    markAsInProgress,
    markAsPending,
    prioritizeTask,
    neglectTask,
    deleteTask
  );
  todoBox.append(todoName, btnGroup);
  display.append(todoBox);
  todoInput.value = "";
});
