(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      const taskList = new TaskManager
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            const dueDate = document.getElementById("date");
            const firstName = document.getElementById("firstName");
            const lastName = document.getElementById("lastName");
            const taskName = document.getElementById("formTaskNameInput");
            const description = document.getElementById(
              "formTaskDescriptionInput"
            );
            const progress = document.getElementById("inputStatusSelect01");

            const valiDate = validateDate(date);
            const validFirstName = validateName(firstName);
            const validLastName = validateName(lastName);
            const validtaskName = validateTaskName(taskName);
            const validDescription = validateDescription(description);
            const validprogress = validateProgress(progress);

            event.preventDefault(); //delete event.preventDefault when all working
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              form.reportValidity();
            } else {
              taskList.addTask
            }
            form.classList.add("was-validated");
          },
          false
        );
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
