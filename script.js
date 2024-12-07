// الحصول على عناصر الصفحة
const taskInput = document.getElementById("task-input");
const todoList = document.getElementById("todo-list");

// وظيفة لإضافة مهمة جديدة
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // إنشاء عنصر <li> للمهمة
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${taskText}
    <button onclick="deleteTask(this)">Delete</button>
  `;

  // إضافة المهمة إلى القائمة
  todoList.appendChild(listItem);

  // مسح خانة الإدخال
  taskInput.value = "";
}

// وظيفة لحذف مهمة
function deleteTask(button) {
  const listItem = button.parentElement;
  todoList.removeChild(listItem);
}
