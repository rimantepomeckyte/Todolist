"use strict"

const subject = document.querySelector("#subject");
const priority = document.querySelector("#priority");
const dueDate = document.querySelector("#dueDate");
const percentCompleted = document.querySelector("#percentCompleted");
const addBtn = document.querySelector("#addButton");
const tableBody = document.querySelector("#tableBody");


addBtn.addEventListener("click", function (e){
    e.preventDefault();
    addToDo();}, false);


console.log("pries f-ja");

function addToDo(){
    console.log("f-os pradzia");
    const tbodyRow = document.createElement("tr");
    tableBody.appendChild(tbodyRow);

    const addCheck = document.createElement("td");
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    tableBody.appendChild(addCheck);
    addCheck.appendChild(check);

    check.addEventListener("click", crossingOut);
    function crossingOut(){
        console.log("checked")
        if(check.checked === true){
            addSubject.style.textDecoration="line-through";
            addSubject.style.opacity="0.5";
        }
        else if (check.checked === false){
            addSubject.style.textDecoration="none";
        }
    }

    const addSubject = document.createElement("td");
    addSubject.innerText = subject.value;
    tableBody.appendChild(addSubject);

    const addPriority = document.createElement("td");
    addPriority.innerText = priority.value;
    tableBody.appendChild(addPriority);

    const addDate = document.createElement("td");
    addDate.innerText = dueDate.value;
    tableBody.appendChild(addDate);

    const addPercent = document.createElement("td");
    addPercent.innerText = percentCompleted.value;
    tableBody.appendChild(addPercent);

    const addDelete = document.createElement("td");
    const deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "Delete");
    tableBody.appendChild(addDelete);
    addDelete.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function (e){
        e.preventDefault();
        deleteItem();
    },false);

    function deleteItem(e){
        console.log("f-ja delete");
        tableBody.removeChild(tbodyRow);
    }
    console.log("funkcijos galas");
}
