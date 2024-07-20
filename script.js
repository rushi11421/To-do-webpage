document.querySelectorAll('.task-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
      if (this.checked) {
          this.parentElement.style.textDecoration = 'line-through';
      } else {
          this.parentElement.style.textDecoration = 'none';
      }
  });
});

function addTask()
{
  const taskList = document.getElementById("task-list");
  const newTask = document.getElementById("new-task").value;

  if(newTask.trim() !=='')
  {
     const li = document.createElement("li");
     li.className = 'task-list';
     li.innerHTML = `<input type="checkbox" class="task-checkbox"> ${newTask} `;
     taskList.appendChild(li);
  
     li.querySelectorAll('.task-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
          if (this.checked) {
              this.parentElement.style.textDecoration = 'line-through';
          } else {
              this.parentElement.style.textDecoration = 'none';
          }
      });
    });

  }
}