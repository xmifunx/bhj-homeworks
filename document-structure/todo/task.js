const listOfTasks = document.getElementById('tasks__list');
const inputString = document.getElementById('task__input');

document.getElementById('tasks__add').addEventListener('click',addTask);

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask(event)
    };
});

function addTask(event) {
    event.preventDefault();

    const newTaskText = inputString.value;
    if (newTaskText) {
        inputString.value = "";
    } else {
        return;
    }
    
    const newTaskElement = document.createElement('div');    
    newTaskElement.classList.add("task");
    newTaskElement.innerHTML = `<div class="task__title">${newTaskText}</div><a href="#" class="task__remove">&times;</a>`;

    newTaskElement.lastElementChild.addEventListener('click', function() {
        this.parentElement.remove();
    });

    listOfTasks.insertAdjacentElement("beforeEnd", newTaskElement);
}