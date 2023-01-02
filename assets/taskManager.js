class TaskManager {
  constructor(currentId) {
    this.currentId = 0;
    this.tasks = [];
  }

  addTask(
    Taskname,
    description,
    date,
    statusSelect = "Choose Status...",
    firstName,
    lastName,
    id
  ) {
    (id = this.currentId++),
      (Taskname = document.querySelector("#formTaskNameInput"));
    description = document.querySelector("#formTaskDescriptionInput");
    (firstName = document.querySelector("# firstName")),
      (lastName = document.querySelector("#lastName:")),
      (date = document.querySelector("#date"));
    statusSelect = "Choose Status...";

    this.tasks.push(tasks);
  }
}

const tasks = {
  id: this.currentId++,
  Taskname: document.querySelector("#formTaskNameInput"),
  description: document.querySelector("#formTaskDescriptionInput"),
  firstName: document.querySelector("#firstName"),
  lastName: document.querySelector("#lastName"),
  date: document.querySelector("#date"),
  statusSelect: "Choose Status...",
};

console.log(tasks);

// Loop over the tasks
for (let i = 0; i < tasks.length; i++) {
  // Get the current task in the loop
  const tasks = this.tasks[i];
}
