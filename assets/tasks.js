class Task {
  constructor(
    taskName,
    taskDescription,
    firstName,
    lastName,
    dueDate,
    progress,
    id
  ) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dueDate = dueDate;
    this.progress = progress;
    this.id = id;
  }}

  const createTaskHtml = (taskName, taskDescription, firstName, lastName, dueDate, progress, id) => {
    return ` 
    <div class="card border-0 accordion-item">
    <h2 class="card-header btn" data-bs-toggle="collapse" href="${id}">
    <button class="btn btn-link btn-block" type="button" data-toggle="collapse"
        data-target= ${id}>${taskName}</button>
</h2>
    <div id=${id} class="collapse hide" data-bs-parent="#accordion">
    <img class="card-img-top width-30 height-30" src="images/aesthetic-card1.jpg"
        alt="Task 1">
    <div class="card-body rounded-bottom"
        style="background-color: rgba(177, 98, 62, 0.350)">
        <h6 card="card-title"><u>${taskName}</u></h6>
        <p class="card-text text-left">Description:${taskDescription}</p>
        <p class="card-text text-left">Assigned To:${firstName} ${lastName}</p>
        <p class="card-text text-left">Due Date:${dueDate}</p>
        <select class=${progress} id=${id}
        style="background-color:rgba(214, 176, 159, 0.902)"></select>
        </div>
        </div>
        </div>`;
    }

class TaskManager {
  constructor() {
    this.list = [];
    this.currentId = 0;
  }
  addTask(taskName, taskDescription, firstName, lastName, dueDate, progress) {
    const task = new Task(
      taskName,
      taskDescription,
      firstName,
      lastName,
      dueDate,
      progress,
      this.currentId
    );
    task.forEach((createTaskHtml) => {
      let li = document.createElement("li");
      li.innerText = createTaskHtml;
      this.list.appendChild(li);
    });
    this.currentId += 1;
    this.list.push(task);



  }
  removeTask(id) {}
  editTask(task) {}
  getTaskList() {
    return this.list;
  }
}
