var input = document.querySelector('input');
var btn = document.querySelector('button');
var para = document.querySelector('p');
btn.onclick = function() {
  var code = input.value;
  para.textContent = eval(code);
}
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

Person.prototype.bio = function() {
  // First define a string, and make it equal to the part of
  // the bio that we know will always be the same.
  var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  // define a variable that will contain the pronoun part of
  // the second sentence
  var pronoun;
  // check what the value of gender is, and set pronoun
  // to an appropriate value in each case
  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    pronoun = 'He likes ';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    pronoun = 'She likes ';
  } else {
    pronoun = 'They like ';
  }
  // add the pronoun string on to the end of the main string
  string += pronoun;
  // use another conditional to structure the last part of the
  // second sentence depending on whether the number of interests
  // is 1, 2, or 3
  if(this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if(this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {
    // if there are more than 2 interests, we loop through them
    // all, adding each one to the main string followed by a comma,
    // except for the last one, which needs an and & a full stop
    for(var i = 0; i < this.interests.length; i++) {
      if(i === this.interests.length - 1) {
        string += 'and ' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }
  // finally, with the string built, we alert() it
  alert(string);
};

var person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    this.name = {
      first,
      last
    };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  // subject and grade are specific to Teacher
  this.subject = subject;
  this.grade = grade;
  }
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.greeting = function() {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};
var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

function Student (first, last, age, gender, interests) {
  Person.call(this, first, last, age, gender, interests);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.greeting = function() {
  alert(`Hail. My name is ${this.name.first}, and I'm a student.`);
};
let student1 = new Student ("Laura", "Adams", 19, "F", ["cooking", "sleeping", "reading"]);

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();
// Leia has left the building. Bye for now