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
  }
}

const createTaskHtml = (
  taskName,
  taskDescription,
  firstName,
  lastName,
  dueDate,
  progress,
  id
) => {
  return `
    <div class="card border-0 accordion-item">
    <h2 class="card-header btn" data-bs-toggle="collapse" href="collapse-${id}">
    <button class="btn btn-link btn-block" type="button" data-toggle="collapse"
        data-target="#collapse-${id}" style="background-color: rgba(177, 98, 62, 0.804); outline-style: #000; color: white;">${taskName}</button>
</h2>
    <div id="collapse-${id}" class="collapse hide" data-bs-parent="#accordion">
    <img class="card-img-top width-30 height-30" src="images/aesthetic-card1.jpg"
        alt="Task 1">
    <div class="card-body rounded-bottom"
        style="background-color: rgba(177, 98, 62, 0.350)">
        <h6 card="card-title"><u>${taskName}</u></h6>
        <p class="card-text text-left">Description: ${taskDescription}</p>
        <p class="card-text text-left">Assigned To: ${firstName} ${lastName}</p>
        <p class="card-text text-left">Due Date: ${dueDate}</p>
        <p class="card-text text-left">Progress: ${progress}</p>
        <button onclick=editHandler(this) id="edit-${id}" class=" edit btn btn-light mx-auto" style="background-color: rgba(177, 98, 62, 0.804); outline-style:
           #000;">Edit</button>
        <button onclick=deleteHandler(this) id="delete-${id}" class="btn btn-light mx-auto" style="background-color: rgba(177, 98, 62, 0.804); outline-style:
           #000;">Delete Task</button>
        </div>
        </div>
        </div>`;
};

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

    this.currentId += 1;
    this.list.push(task);
    this.render();
  }

  removeTask(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id == id) {
        this.list.splice(i, 1);
        this.render();
        return;
      }
    }
  }

  editTask(id) {
    console.log(id);
    for (let i = 0; i < this.list.length; i++) {
      let taskNameEdit = this.list[i].taskName; //this is the taskname in current tasks we're trying to put into task Name form field
      //let taskNameInput = document.getElementById("formTaskNameInput");
      //console.log("formInput", document.getElementById("formTaskNameInput"));
      let formTaskNameInput = document.getElementById("formTaskNameInput");
      //let formInput = document.getElementById("formTaskNameInput");
      //let formInput = document.getElementById("formTaskNameInput");
      //let formInput = document.getElementById("formTaskNameInput");
      // let formInput = document.getElementById("formTaskNameInput");
      //let formInput = document.getElementById("formTaskNameInput");

      console.log("taskNameEdit", taskNameEdit);
      console.log("input", formTaskNameInput);
      if (this.list[i].id == id) {
        //document.getElementById("formTaskNameInput") = taskNameEdit;
        formTaskNameInput.value = taskNameEdit;

        //taskNameInput.appendChild.createElement("taskNamEdit");
        return;
        //let taskNameInput = form.elements["formTaskNameInput"];
        //taskNameInput = taskNameEdit;
      }
    }
  }

  render() {
    const taskList = document.getElementById("accordion");
    let finalTaskList = "";
    for (let i = 0; i < this.list.length; i++) {
      //  const list = this.list[i];
      let taskHtml = createTaskHtml(
        this.list[i].taskName,
        this.list[i].taskDescription,
        this.list[i].firstName,
        this.list[i].lastName,
        this.list[i].dueDate,
        this.list[i].progress,
        this.list[i].id
      );
      finalTaskList += taskHtml;
    }
    taskList.innerHTML = "";
    taskList.insertAdjacentHTML("afterBegin", finalTaskList);
  }

  getTaskList() {
    return this.list;
  }
}
