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
            console.log(date.value);
            const l = validateDate(date);
            console.log(l);
            event.preventDefault();
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
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
    date.reportValidity();
    return false;
  }
  const dateFormatMatch = date.value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (dateFormatMatch == null) {
    date.setCustomValidity("Date format mm/dd/yyyy");
    date.reportValidity();
    return false;
  }
  const splitDate = date.value.split("/");
  console.log(splitDate);
  const month = splitDate[0];
  const day = splitDate[1];
  const year = splitDate[2];
  if (month < 1 || month > 12) {
    date.setCustomValidity("Please enter valid month");
    date.reportValidity();
    return false;
  }
  if (day < 1 || day > 31) {
    date.setCustomValidity("Please enter valid day");
    date.reportValidity();
    return false;
  }
  if (year < 2000) {
    date.setCustomValidity("Please enter valid year");
    date.reportValidity();
    return false;
  }
  console.log(month);
  return true;
}
