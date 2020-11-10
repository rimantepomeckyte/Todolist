"use strict"

const subject = document.querySelector("#subject");
const priority = document.querySelector("#priority");
const dueDate = document.querySelector("#dueDate");
const percentCompleted = document.querySelector("#percentCompleted");
const addBtn = document.querySelector("#addButton");
const theadRow = document.querySelector(".firstTableRow");
const tableBody = document.querySelector("#tableBody");

addBtn.addEventListener("click", addToDo);

function addToDo(){
    const tbodyRow = document.createElement("tr");
    tableBody.appendChild(tbodyRow);
    let nzn = theadRow.value;
    for(let i=0; i<nzn; i++){
        const tbodyColumns = document.createElement("td");
        tbodyColumns.textContent="va";
        tableBody.appendChild(tbodyColumns);
    }

}
