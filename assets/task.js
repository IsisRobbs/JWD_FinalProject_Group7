class Task {
    constructor(taskName, taskDescription, firstName, lastName, dueDate, progress, id){
      this.taskName = taskName,
      this.taskDescription = taskDescription,
      this.firstName = firstName,
      this.lastName = lastName,
      this.dueDate = dueDate,
      this.progress = progress,
      this.id = id
    }};

     function createTaskHtml(){
      const html=
     `<div id="${id}" class="collapse hide" data-bs-parent="#accordion">
     <img class="card-img-top width-30 height-30" src="images/aesthetic-card1.jpg"
         alt="Task 1">
     <div class="card-body rounded-bottom"
         style="background-color: rgba(177, 98, 62, 0.350)">
         <h6 card="card-title"><u>${taskName}</u></h6>
         <p class="card-text text-left">Description:${taskDescription}</p>
         <p class="card-text text-left">Assigned To:${firstName} ${lastName}</p>
         <p class="card-text text-left">Due Date:${dueDate}</p>
         <select class="${progress}" id="${id}"
         style="background-color:rgba(214, 176, 159, 0.902)"></select>`;
     };
    
    
    class TaskManager {
      constructor() {
        this.list = [];
        this.currentId = 0;
      }
     addTask(taskName, taskDescription, firstName, lastName, dueDate, progress){
        const task = new Task(
    taskName,
    taskDescription,
     firstName, 
     lastName, 
     dueDate,
    progress,
    this.currentId
    );

    this.list.push(task);
    this.currentId += 1;
    this.render();
    }
    render(){
        // how would we make the html render here? Which id would we be searching for ?
    }
}