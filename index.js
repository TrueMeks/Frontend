
const tasks = [];

function createTaskElement(task) {
  const taskElement = document.createElement('div');
  taskElement.className = 'task-item';
  taskElement.dataset.id = task.id;

  taskElement.innerHTML = `
    <div class="task-item__main-container">
      <div class="task-item__main-content">
        <form class="checkbox-form">
          <input type="checkbox" id="task-${task.id}" class="checkbox-form__checkbox">
          <label for="task-${task.id}"></label>
        </form>
        <span class="task-item__text">${task.text}</span>
      </div>
      <button class="task-item__delete-button default-button">Удалить</button>
    </div>
  `;

  return taskElement;
}


document.querySelector('.create-task-block').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const input = this.querySelector('.create-task-block__input');
  const taskText = input.value.trim();
  
  if (!taskText) {
    return;
  }
  

  const newTask = {
    id: Date.now(), 
    text: taskText,
    completed: false
  };
  

  tasks.push(newTask);
  

  const taskElement = createTaskElement(newTask);
  document.querySelector('.tasks-list').appendChild(taskElement);
  

  input.value = '';
});