const taskForm = (function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener(
        'submit', 
        function(event) {
    var taskName = document.getElementById('validationFormTaskNameInput');
    var taskDescription = document.getElementById('validationDescription');
    var firstName = document.getElementById('validationFirstName');
    var lastName = document.getElementById('validationLastName');
    var dueDate = document.getElementById('validationDate');
    var submit = document.getElementById('submitButton');
    var taskNameError = document.getElementById('taskNameError');
        
    if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }   
        form.classList.add('was-validated');
        
        var taskNameChar = taskName.value.length;
        if(taskNameChar > 30) {
          event.preventDefault();
          event.stopPropagation();
          console.log('Task name can be no longer than 30 characters long!')
        }
       });
      }, false);   
   }, false);
})();
    
