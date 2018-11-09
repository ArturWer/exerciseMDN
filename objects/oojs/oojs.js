function createNewPerson(name) {
  let obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert(`Hi! I\'m ${this.name}.`);
  };
  return obj;
}
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert(`Hi! I\'m ${this.name}.`);
  };
}
let person1 = new Person('Bob');
let person2 = new Person('Sarah');