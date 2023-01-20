class Task {
  constructor(
    taskName,
    taskDescription,
    firstName,
    lastName,
    dueDate,
    progress,
    id,
    pic
  ) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dueDate = dueDate;
    this.progress = progress;
    (this.id = id), (this.pic = pic);
  }
}

const createTaskHtml = (
  taskName,
  taskDescription,
  firstName,
  lastName,
  dueDate,
  progress,
  id,
  pic
) => {
  return `
    <div id="parentDiv-${id}" class="card border-0 accordion-item">
    <h2 class="card-header btn" data-bs-toggle="collapse" href="collapse-${id}">
    <button class="btn btn-link btn-block" type="button" data-toggle="collapse"
        data-target="#collapse-${id}" style="background-color: rgba(177, 98, 62, 0.804); outline-style: #000; color: white;">${taskName}</button>
</h2>
    <div id="collapse-${id}" class="collapse hide" data-bs-parent="#accordion">
    <img class="card-img-top width-30 height-30" src="${pic}">
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
    this.pics = [
      "./images/aesthetic-card1.jpg",
      "./images/aesthetic-card2.jpg",
      "./images/aesthetic-card3.jpg",
      "./images/aesthetic-card4.jpg",
      "./images/aesthetic-card5.jpg",
      "./images/aesthetic-card6.jpg",
    ];

    this.usedPics = [];
  }

  pictureGenerater() {
    let randomIdx = Math.floor(Math.random() * this.pics.length); //randomIdx: Change number to random index
    let ranPic = this.pics.splice(randomIdx, 1)[0]; //ranPic: splicing from array to put into the task card, the number 1 represents how many pictures is being deleted
    //This is here to make sure the code doesen't break after all the pics have been used and returns usedPics to empty array
    this.usedPics.push(ranPic);
    if (this.pics.length === 0) {
      this.pics = this.usedPics;
      this.usedPics = []; //here to manipulate the constructor
      // return ranPic;
    }

    return ranPic;
  }

  addTask(taskName, taskDescription, firstName, lastName, dueDate, progress) {
    const task = new Task(
      taskName,
      taskDescription,
      firstName,
      lastName,
      dueDate,
      progress,
      this.currentId,
      this.pictureGenerater()
    );

    this.currentId += 1;
    this.list.push(task);
    this.render();
  }

  removeTask(id) {
    // remove task method works as is
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id == id) {
        this.list.splice(i, 1);
        this.render();
        return;
      }
    }
  }

  sortByStatus() {
    let sorted = [];
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].progress != "Done") {
        let found = this.list[i];
        sorted.push(found);
      }
    }

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].progress == "Done") {
        let found = this.list[i];
        sorted.push(found);
      }
    }
    this.list = sorted;
  }

  // let sorted = [];
  //let progressStatus = this.list.progress;
  //this.list.sort(function (a, b) {
  //  console.log(a);
  //  console.log(b);
  // if (a.progress > b.progress) {
  //    return 1;
  // }
  // if (a.progress < b.progress) {
  // return -1;
  //}
  //return 0;
  // });

  editTask(
    taskName,
    taskDescription,
    firstName,
    lastName,
    dueDate,
    progress,
    id
  ) {
    console.log(id);
    const edit = this.getTask(id);
    console.log(edit);
    edit.taskName = taskName.value;
    edit.taskDescription = taskDescription.value;
    edit.firstName = firstName.value;
    edit.lastName = lastName.value;
    edit.dueDate = dueDate.value;
    edit.progress = progress.value;

    const maybe = this.getTask(id);
    console.log("maybe", maybe);

    console.log("getTask id", edit);
    this.render();
  }

  getTask(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id != id) {
        continue; //if it isn't the id, keep going through the loop
      }
      return this.list[i];
    }
  }

  render() {
    const taskList = document.getElementById("accordion");
    let finalTaskList = "";
    this.sortByStatus();
    addToLocalStorage(this);

    for (let i = 0; i < this.list.length; i++) {
      //  const list = this.list[i];
      let taskHtml = createTaskHtml(
        this.list[i].taskName,
        this.list[i].taskDescription,
        this.list[i].firstName,
        this.list[i].lastName,
        this.list[i].dueDate,
        this.list[i].progress,
        this.list[i].id,
        this.list[i].pic
      );
      finalTaskList += taskHtml;
    }
    taskList.innerHTML = "";
    taskList.insertAdjacentHTML("afterBegin", finalTaskList);
  }

  // removeTask(id) {}
  // editTask(task) {}
  // getTaskList() {
  // return this.list;
  // }
}
