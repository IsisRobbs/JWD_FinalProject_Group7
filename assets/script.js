(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            const date = document.getElementById("date");
            const firstName = document.getElementById("firstName");

            const lastName = document.getElementById("lastName");

            const valiDate = validateDate(date);
            const validFirstName = validateName(firstName);
            const validLastName = validateName(lastName);
            console.log(valiDate);

            event.preventDefault(); //delete event.preventDefault when all working
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              form.reportValidity();
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
  const dateFormatMatch = date.value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (dateFormatMatch == null) {
    date.setCustomValidity("Date format mm/dd/yyyy");
    // date.reportValidity();
    return false;
  }
  const splitDate = date.value.split("/");
  console.log(splitDate);
  const month = splitDate[0];
  const day = splitDate[1];
  const year = splitDate[2];
  if (month < 1 || month > 12) {
    date.setCustomValidity("Please enter valid month");
    // date.reportValidity();
    return false;
  }
  if (day < 1 || day > 31) {
    date.setCustomValidity("Please enter valid day");
    //date.reportValidity();
    return false;
  }
  if (year < 2000) {
    date.setCustomValidity("Please enter valid year");
    //date.reportValidity();
    return false;
  }
  console.log(month);
  return true;
}

function validateName(name) {
  name.setCustomValidity("");
  console.log(name.value.length);
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
