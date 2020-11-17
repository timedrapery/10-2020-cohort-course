// All JS goes here...

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addAssignmentItem);
function addAssignmentItem() {
    alert("Add button clicked!");
}

var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedAssignmentItems);
function clearCompletedToDoItems() {
    alert("Clear button clicked!");
}

var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);
function emptyList() {
    alert("Empty button clicked!");
}

var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);
function saveList() {
    alert("Save button clicked!");
}

var assignmentEntryBox = document.getElementById("assignment-entry-box");
var assignmentList = document.getElementById("assignment-list");

function newAssignmentItem(itemText, completed) {
    var assignmentItem = document.createElement("li");
    var assignmentText = document.createTextNode(assignmentText);
    assignmentItem.appendChild(assignmentText);

    if (completed) {
        assignmentItem.classList.add("completed");
    }

    assignmentList.appendChild(assignmentItem);
    assignmentItem.addEventListener("dblclick", toggleAssignmentItemState);
}

function addAssignmentItem() {
    var itemText = assignmentEntryBox.value;
    newAssignmentItem(itemText, false);
}

function toggleAssignmentItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompletedAssignmentItems() {
    var completedItems = assignmentList.getElementsByClassName("completed");
    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    var assignmentItems = assignmentList.children;
    while (assignmentItems.length > 0) {
        assignmentItems.item(0).remove();
    }
}

var myArray = [];
myArray.push("List stored!");
myArray.push("something else to store");
alert(myArray[0]);

var toDoInfo = {
    task: "Thing I need to do",
    completed: false
};

function saveList() {
    var toDos = [];
    for (var i = 0; i < assignmentList.children.length; i++) {
        var assignment = assignmentList.children.item(i);
        var assignmentInfo = {
            task: assignment.innerText,
            completed: assignment.classList.contains("completed")
        };
        assignments.push(assignmentInfo);
    }

    localStorage.setItem("assignments", JSON.stringify(assignments));
}

function loadList() {
    if (localStorage.getItem("assignments") !== null) {
        var assignments = JSON.parse(localStorage.getItem("assignments"));
        for (var i = 0; i < assignments.length; i++) {
            var assignment = assignments[i];
            newAssignmentItem(assignment.task, assignment.completed);
            loadList();
        }
    }
}