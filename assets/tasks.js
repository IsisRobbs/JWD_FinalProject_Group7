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
    this.id = id;
    this.pic = pic;
  }
}

//}

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
  return `<div class="card border-0 accordion-item">
        <h2 class="card-header btn" data-bs-toggle="collapse" href="#collapse-${id}">
            <button class="btn btn-link btn-block" type="button" data-toggle="collapse"
                data-target="#collapse-${id}">
                ${taskName}
            </button>
        </h2>
        <div id="collapse-${id}" class="collapse hide" data-bs-parent="#accordion">
            <img class="card-img-top width-30 height-30" src="images/${pic}"
                alt="Task 1">
            <div class="card-body rounded-bottom"
                style="background-color: rgba(177, 98, 62, 0.350)">
                <h6 card="card-title"><u>${taskName}</u></h6>
                <p class="card-text text-left">Description: ${taskDescription}
                </p>
                <p class="card-text text-left">Assigned To: ${firstName} ${lastName}</p>
                <p class="card-text text-left">Due Date: ${dueDate}</p>
                <!--Dropdown Status-->
                <select class="custom-select" id="inputStatusSelect01"
                    style="background-color:rgba(214, 176, 159, 0.902)">
                    
                    <option ${progress == "1" ? "selected " : ""}
                      value="1">To Do</option>
                    <option ${progress == "2" ? "selected " : ""}
                    value="2">In Progress</option>
                    <option ${progress == "3" ? "selected " : ""}
                    value="3">Review</option>
                    <option ${progress == "4" ? "selected " : ""}
                    value="4">Done</option>
                </select>
            </div>
        </div>
    </div>`;
};

class TaskManager {
  // this is the blueprint
  constructor() {
    //this is called when you create an object eg let TM = new TaskManager()
    this.list = []; //fields available inside of class, also called Member Variables
    this.currentId = 0;
    this.pics = [
      "aesthetic-card1.jpg",
      "aesthetic-card2.jpg",
      "aesthetic-card3.jpg",
      "aesthetic-card4.jpg",
      "aesthetic-card5.jpg",
      "aesthetic-card6.jpg",
    ];
    this.usedPics = [];
  }

  getRandomPic() {
    //method or (member function)
    console.log(this.pics);
    let randomIdx = Math.floor(Math.random() * this.pics.length);
    console.log(randomIdx);
    let randPic = this.pics.splice(randomIdx, 1);
    this.usedPics.push(randPic);
    console.log("randomized ", this.pics);
    console.log("used pics ", this.usedPics);
    if (this.pics.length === 0) {
      this.pics = this.usedPics;
      this.usedPics = [];
    }
    return randPic;
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
      this.getRandomPic()
    );
    this.currentId += 1;
    this.list.push(task);
    this.render();
  }

  render() {
    const list = document.getElementById("accordion");
    let finalTaskList = "";

    for (let i = 0; i < this.list.length; i++) {
      const taskHTML = createTaskHtml(
        this.list[i].taskName,
        this.list[i].taskDescription,
        this.list[i].firstName,
        this.list[i].lastName,
        this.list[i].dueDate,
        this.list[i].progress,
        this.list[i].id,
        this.list[i].pic
      );
      finalTaskList += taskHTML;
    }
    list.innerHTML = "";
    list.insertAdjacentHTML("afterBegin", finalTaskList);
  }
  //removeTask(id) {}
  //editTask(task) {}
  //getTaskList() {
  //return this.list;
  // }
}
