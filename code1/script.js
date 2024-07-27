document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    const deleteButton = document.getElementById("deleteButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            listItem.addEventListener("click", () => {
                listItem.classList.toggle("selected");
            });
            taskList.appendChild(listItem);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Function to delete selected tasks
    function deleteTask() {
        const selectedItems = document.querySelectorAll("#taskList .selected");
        selectedItems.forEach(item => item.remove());
    }

    // Event listeners
    addButton.addEventListener("click", addTask);
    deleteButton.addEventListener("click", deleteTask);

    // Optional: Allow pressing Enter to add tasks
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
