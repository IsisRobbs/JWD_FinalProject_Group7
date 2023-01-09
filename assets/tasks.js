class Task {
  constructor(
    taskName,
    taskDescription,
    firstName,
    lastName,
    dueDate,
    progress,
    id,
    picture
  ) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dueDate = dueDate;
    this.progress = progress;
    this.picture = picture;
    this.id = id;
  }}

  const createTaskHtml = (taskName, taskDescription, firstName, lastName, dueDate, picture, progress, id) => {
    return `
    <div class="card border-0 accordion-item">
    <h2 class="card-header btn" data-bs-toggle="collapse" href="collapse-${id}">
    <button class="btn btn-link btn-block" type="button" data-toggle="collapse"
        data-target="#collapse-${id}">${taskName}</button>
</h2>
    <div id="collapse-${id}" class="collapse hide" data-bs-parent="#accordion">
   <img class="card-img-top width-30 height-30" src="${picture}"
        alt="Task 1">
    <div class="card-body rounded-bottom"
        style="background-color: rgba(177, 98, 62, 0.350)">
        <h6 card="card-title"><u>${taskName}</u></h6>
        <p class="card-text text-left">Description:${taskDescription}</p>
        <p class="card-text text-left">Assigned To:${firstName} ${lastName}</p>
        <p class="card-text text-left">Due Date:${dueDate}</p>
        <p class="card-text text-left">Progress:${progress}</p>
        </div>
        </div>
        </div>`;
    }

class TaskManager {
  constructor() {
    this.list = [];
    this.currentId = 0;
  }
    getRandomImage(){
    var taskPicture = new Array();
    randomPicture[0] = images\aesthetic-card1.jpg;
    randomPicture[1] = images\aesthetic-card2.jpg;
    randomPicture[2] =
    randomPicture[3] =
    randomPicture[4] =
    randomPicture[5] =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              tr
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
   this.list[i].taskDescription,
   this.list[i].taskName,
   this.list[i].firstName,
   this.list[i].lastName,
   this.list[i].dueDate,
   this.list[i].progress,
   this.list[i].id
    );
   finalTaskList += taskHtml     
   }
 taskList.innerHTML = "";
 taskList.insertAdjacentHTML("afterBegin", finalTaskList);


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

  removeTask(id) {}
  editTask(task) {}
  getTaskList() {
  return this.list;
  }
}
