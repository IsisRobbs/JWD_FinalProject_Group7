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
    <div class="container" id="accordion">
    <h4 class="font-weight-light text-center p-3"><u>Current Tasks:</u></h4>
    <div class="row my-4">
    <div class="card border-0 accordion-item">
    <h2 class="card-header btn" data-bs-toggle="collapse" href="${id}">
    <button class="btn btn-link btn-block" type="button" data-toggle="collapse"
        data-target= "${id}">${taskName}</button>
</h2>
    <div id="${id}" class="collapse hide" data-bs-parent="#accordion">
    <img class="card-img-top width-30 height-30" src="images/aesthetic-card1.jpg"
        alt="Task 1">
    <div class="card-body rounded-bottom"
        style="background-color: rgba(177, 98, 62, 0.350)">
        <h6 card="card-title"><u>${taskName}</u></h6>
        <p class="card-text text-left">Description:${taskDescription}</p>
        <p class="card-text text-left">Assigned To:${firstName} ${lastName}</p>
        <p class="card-text text-left">Due Date:${dueDate}</p>
        <select style="width: 200px" class="custom-select"
        id="${id}" required>
        <option value="">${progress}...</option>
        <option value="1">To Do</option>
        <option value="2">In Progress</option>
        <option value="3">Review</option>
        <option value="4">Done</option>
    </select>
        </div>
        </div>
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
   
    this.currentId += 1;
    this.list.push(task);
    this.render();
  }

    render(){
   const taskList = document.getElementById("accordion");
   let finalTaskList = "";
   for (let i=0; i < this.list.length; i++){
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
   finalTaskList += taskHtml     
   }
 taskList.innerHTML = '';
 taskList.insertAdjacentHTML('afterBegin', finalTaskList);


//    for (let i=0; i < this.list.length; i++){
//    const currentTask = this.list[i];
//   this.list.forEach((taskList) => {
//     let newItem = document.createElement("li");
//     newItem.innerText = createTaskHtml(
//       currentTask.taskName, 
//       currentTask.taskDescription, 
//       currentTask.firstName, 
//       currentTask.lastName, 
//       currentTask.dueDate, 
//       currentTask.progress, 
//       currentTask.id);
//       taskList.appendChild(newItem);
//  }
//     )
    
//   }
}

  // removeTask(id) {}
  // editTask(task) {}
  // getTaskList() {
  // return this.list;
  // }
}
