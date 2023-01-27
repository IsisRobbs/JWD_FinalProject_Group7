var g_taskManager; //g_ is for global

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      getFromLocalStorage();
      g_taskManager.render();
      const button = document.getElementById("addTaskUpdate");
      button.setAttribute("onclick", "addHandler(event)");
    },
    false
  );
})();

function validateDate(date) {
  date.setCustomValidity("");

  if (date.value.length == 0) {
    date.setCustomValidity("Please enter valid date");
    // date.reportValidity();
    return false;
  }

  return true;
}

function validateName(name) {
  name.setCustomValidity("");
  if (name.value.length == 0) {
    name.setCustomValidity("Name must have at least 1 letter");
    //name.reportValidity();
    return false;
  }
  const nameFormatMatch = name.value.match(/^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/i);
  if (nameFormatMatch == null) {
    name.setCustomValidity("Please enter valid name");
    //name.reportValidity();
    return false;
  }
  return true;
}

function validateTaskName(taskName) {
  taskName.setCustomValidity("");
  if (taskName.value.length == 0) {
    taskName.setCustomValidity("Please name your task");
    return false;
  }
  return true;
}

function validateDescription(description) {
  description.setCustomValidity("");
  if (description.value.length == 0) {
    description.setCustomValidity("Please describe your task");
    return false;
  }
  return true;
}

function validateProgress(progress) {
  progress.setCustomValidity("");
  if (progress.value.length == 0) {
    progress.setCustomValidity("Please select a status");
    return false;
  }
  return true;
}

function deleteHandler(button) {
  const elementID = button.id;
  const taskID = elementID.split("-")[1];
  g_taskManager.removeTask(taskID);
  console.log("deleteHandler: ", elementID);
}

function editHandler(button) {
  // **CHECK** this should get taskID like it is
  // **CHECK** then it should get the task by ID from a new method we make in Task Manager Class(taskList.getTask(ID))
  // **CHECK** then it should use that task to populate the form like taskList.editTask() currently does (pull that code out of editTask since it isn't edit related)
  // **CHECK**then it needs to change the add task button to save changes or something (including setting the onclick to the below thing)

  const addEdit = document.getElementById("addTaskUpdate");
  const form = document.getElementById("taskForm");
  // console.log(addEdit.innerHTML);
  const elementID = button.id;
  const taskID = elementID.split("-")[1];
  const task = g_taskManager.getTask(taskID); // gets the task out of the list
  form.setAttribute("data-taskId", task.id); //we are adding an id to the form here so that whenever we are "saving changes" we know which task id it is
  //declaring what's in the accordion item to be entered into fields
  const taskNameEdit = task.taskName; //this is the taskname in current tasks we're trying to put into task Name form field
  const taskDateEdit = task.dueDate;
  const taskDescriptionEdit = task.taskDescription;
  const taskFirstNameEdit = task.firstName;
  const taskLastNameEdit = task.lastName;
  const taskStatusEdit = task.progress;

  const formTaskNameInput = document.getElementById("formTaskNameInput"); //this is the taskName field trying to insert to
  const formTaskDateInput = document.getElementById("date");
  const formTaskDescriptionInput = document.getElementById(
    "formTaskDescriptionInput"
  );
  const formTaskFirstNameInput = document.getElementById("firstName");
  const formTaskLastNameInput = document.getElementById("lastName");
  const formTaskProgressInput = document.getElementById("inputStatusSelect01");
  formTaskNameInput.value = taskNameEdit; //populating fields with input from task card
  formTaskDescriptionInput.value = taskDescriptionEdit;
  formTaskDateInput.value = taskDateEdit;
  formTaskFirstNameInput.value = taskFirstNameEdit;
  formTaskLastNameInput.value = taskLastNameEdit;
  formTaskProgressInput.value = taskStatusEdit;
  addEdit.innerHTML = "Save Changes";
  addEdit.setAttribute("onclick", "taskUpdateHandler(this)");
}

function addHandler(event) {
  //checks form for validation and adds to taskList once validated
  const forms = document.getElementsByClassName("needs-validation");
  const form = forms[0];
  const date = document.getElementById("date");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const taskName = document.getElementById("formTaskNameInput");
  const description = document.getElementById("formTaskDescriptionInput");
  const progress = document.getElementById("inputStatusSelect01");

  const valiDate = validateDate(date);
  const validFirstName = validateName(firstName);
  const validLastName = validateName(lastName);
  const validtaskName = validateTaskName(taskName);
  const validDescription = validateDescription(description);
  const validprogress = validateProgress(progress);
  //console.log(event);
  if (form.checkValidity() === false) {
    event.stopPropagation();
    form.reportValidity();
  } else {
    g_taskManager.addTask(
      taskName.value,
      description.value,
      firstName.value,
      lastName.value,
      date.value,
      progress.value
    );

    //clears form entries, clears validation
    form.classList.remove("was-validated");
    document.getElementById("taskForm").reset();
  }
  console.log(g_taskManager.list); //g_taskManager.list is the task list
}
// THEN
// **check*then we make a new handler for that new button
// **check*that handler needs to get the ID from the form (we must have set it above)
// **check*it then calls list.editTask(ID)
// **check*that does the JS stuff to change it in the list
// **check*(then we render()
// **check*then we change the button back and clear the form (and also set the onclick to the original add task onclick)
function taskUpdateHandler(button) {
  button.innerHTML = "Add Task";
  button.setAttribute("onclick", "addHandler(event)");
  const date = document.getElementById("date");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const taskName = document.getElementById("formTaskNameInput");
  const description = document.getElementById("formTaskDescriptionInput");
  const progress = document.getElementById("inputStatusSelect01");
  const form = document.getElementById("taskForm");
  const taskID = form.getAttribute("data-taskid");

  g_taskManager.editTask(
    taskName,
    description,
    firstName,
    lastName,
    date,
    progress,
    taskID
  );
  form.classList.remove("was-validated");
  document.getElementById("taskForm").reset();
}

function toggleTaskFormVisibilityHandler(button) {
  console.log(button);
  if (button.innerHTML == "Create or Edit Task") {
    button.innerHTML = "Hide Task Form";
  } else {
    button.innerHTML = "Create or Edit Task";
  }
}
function addToLocalStorage(tm) {
  localStorage.setItem("g_taskManager", JSON.stringify(g_taskManager));
}

function getFromLocalStorage() {
  g_taskManager = new TaskManager();
  let tasksFromStorage = JSON.parse(localStorage.getItem("g_taskManager"));
  Object.assign(g_taskManager, tasksFromStorage);
}
//I got here by watching tutorial https://www.google.com/search?q=to+do+list+local+storage+javascript&rlz=1C1RXQR_enUS1008US1008&oq=to+do+list+local+storage&aqs=chrome.0.0i512j69i57j0i22i30l2j0i390l2j69i60l2.4415j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:c242f8c4,vid:y71CdVq5SvI

//I also referenced https://stackoverflow.com/questions/34083730/how-to-store-and-get-an-object-without-destroying-the-type-in-localstorage
//Our classes have methods so this was helpful within the stack overflow article:
//"While Martin's answer works for classes without methods. For classes with methods you can try this:

//let personFromStorage = JSON.parse(localStorage.getItem//('person')) as Person;
//
//let person = new Person('');
//Object.assign(person , personFromStorage);""

//let personFromStorage = JSON.parse(localStorage.getItem//('person')) as Person;
//
//let person = new Person('');
//Object.assign(person , personFromStorage);""