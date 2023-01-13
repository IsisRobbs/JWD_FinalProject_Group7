var list;

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      list = new TaskManager();

      let hideShow = document.getElementById("collapseFormButton");
      hideShow.onclick = () => {
        if (hideShow.innerHTML == "Create or Edit Task") {
          hideShow.innerHTML = "Hide Task Form";
        } else {
          hideShow.innerHTML = "Create or Edit Task";
        }
      };

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener("submit", addHandler, false);
      });
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
  elementID = button.id;
  taskID = elementID.split("-")[1];
  list.removeTask(taskID);
  console.log("deleteHandler: ", elementID);
}

function editHandler(button) {
  // **CHECK** this should get taskID like it is
  // **CHECK** then it should get the task by ID from a new method we make in Task Manager Class(taskList.getTask(ID))
  // **CHECK** then it should use that task to populate the form like taskList.editTask() currently does (pull that code out of editTask since it isn't edit related)
  // **CHECK**then it needs to change the add task button to save changes or something (including setting the onclick to the below thing)

  addEdit = document.getElementById("addTaskUpdate");
  form = document.getElementById("taskForm");
  console.log(addEdit.innerHTML);
  elementID = button.id;
  taskID = elementID.split("-")[1];
  task = list.getTask(taskID); // gets the task out of the list
  form.setAttribute("data-taskId", task.id); //we are adding an id to the form here so that whenever we are "saving changes" we know which task id it is
  //declaring what's in the accordion item to be entered into fields
  let taskNameEdit = task.taskName; //this is the taskname in current tasks we're trying to put into task Name form field
  let taskDateEdit = task.dueDate;
  let taskDescriptionEdit = task.taskDescription;
  let taskFirstNameEdit = task.firstName;
  let taskLastNameEdit = task.lastName;
  let taskStatusEdit = task.progress;

  let formTaskNameInput = document.getElementById("formTaskNameInput"); //this is the taskName field trying to insert to
  let formTaskDateInput = document.getElementById("date");
  let formTaskDescriptionInput = document.getElementById(
    "formTaskDescriptionInput"
  );
  let formTaskFirstNameInput = document.getElementById("firstName");
  let formTaskLastNameInput = document.getElementById("lastName");
  let formTaskProgressInput = document.getElementById("inputStatusSelect01");

  formTaskNameInput.value = taskNameEdit; //populating fields with input from task card
  formTaskDescriptionInput.value = taskDescriptionEdit;
  formTaskDateInput.value = taskDateEdit;
  formTaskFirstNameInput.value = taskFirstNameEdit;
  formTaskLastNameInput.value = taskLastNameEdit;
  formTaskProgressInput.value = taskStatusEdit;
  addEdit.innerHTML = "Save Changes";
  addEdit.setAttribute("onclick", "taskUpdateHandler(this)");
}
// elementID = console.log("editHandler: ", elementID);

function addHandler(event) {
  //checks form for validation and adds to taskList once validated
  let forms = document.getElementsByClassName("needs-validation");
  let form = forms[0];
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
  console.log(event);
  event.preventDefault();
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    form.reportValidity();
  } else {
    list.addTask(
      taskName.value,
      description.value,
      firstName.value,
      lastName.value,
      date.value,
      progress.value
    );
    setTimeout(function () {
      //clears form entries, clears validation
      form.classList.remove("was-validated");
      document.getElementById("taskForm").reset();
    }, 1000);
  }
}
// THEN
// then we make a new handler for that new button
// that handler needs to get the ID from the form (we must have set it above)
// it then calls list.editTask(ID)
// that does the JS stuff to change it in the list
// then we render()
// then we change the button back and clear the form (and also set the onclick to the original add task onclick)
function taskUpdateHandler(button) {
  console.log("hello");
  elementID = button.id;

  //let button = document.getElementById("addTaskUpdate");
  button.innerHTML = "Add Task";
  button.setAttribute("onclick", "addHandler(event)");
}
