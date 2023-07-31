//The const variables
const inputTask = document.getElementById("input-task");
const listContainer = document.getElementById("list-container");

//The add taskfunction 
function addTask() {
    if (inputTask.value === "") {
        alert("You must add a task!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = "";
    saveTask();
}

//Event listener to see where we have clicked
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed-task");
        saveTask();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

//The function to save the tasks to local storage
function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}


//The function to show the tasks
function displayTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

displayTasks();
