/**
 * Created by ttn on 27/12/16.
 *
 * Create a class Student having two fields name and roll number and a method to print the student detail.
 * Create two objects of the class and use display method to print the user detail. perform the above tast using ES6
 *
 */

export default class Student {

  constructor(name1, rollNumber1){
    this.name = name1;
    this.rollNumber = rollNumber1;
  }


  display(){
    return `The Student details are: name - ${this.name}, roll number - ${this.rollNumber}`;
  }

}


let stu1 = new Student("test1", "1");
console.log(stu1.display());

let stu2 = new Student("test2", "2");
console.log(stu2.display());

