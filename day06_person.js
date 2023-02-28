//Write a “person” class to hold all the details.
class Person
    {
       
       constructor(firstname,lastname,age)
       {
          this.firstname = firstname;
          this.lastname = lastname;
          this.age = age;
       }
    getFirstName(){
         return this.firstname;
    }
    getLastName(){
      return this.lastname;
    }
    getAge(){
      return this.age;
    }
    }
var person=new Person("Yogesh","Wari",25);
console.log(person.getFirstName());
console.log(person.getLastName());
console.log(person.getAge());
