class Task {
  constructor(taskName, description, firstName, lastName, dueDate, status, id) {
    this.taskName = taskName;
    this.description = description;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dueDate = dueDate;
    this.status = status;
    this.id = id;
  }
}

class TaskManager {
  constructor() {
    this.taskList = [];
    this.currentId = 0;
  }
  addTask(taskName, description, firstName, lastName, dueDate, status) {
    const task = new Task(
      taskName,
      description,
      firstName,
      lastName,
      dueDate,
      status,
      this.currentId
    );

    this.currentId += 1;
    this.taskList.push(task);
  }
  removeTask(id) {}
  editTask(task) {}
  getTaskList() {
    return this.taskList;
  }
}
