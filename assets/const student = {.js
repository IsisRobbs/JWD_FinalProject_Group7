const student = {
   name : "Isis",
   subject:"JWD" 
};

function createStudent(name, subject) {
  return{ name: name,
    subject: subject
  }
};
var newStudent = createStudent("Isis", "JWD");
console.log(newStudent);

// constructer function
function Student(name, subject) {
    this.name = name;
    this.subject = subject;
};

var anotherStudent = new Student("Isis", "JWD");
console.log(anotherStudent);

// class
class Students {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
}
var anotherNewStudent = new Students("Isis", "JWD");
console.log(anotherNewStudent);