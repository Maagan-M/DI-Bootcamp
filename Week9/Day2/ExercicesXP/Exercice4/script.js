class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
//it defines a class named person and it assigns to it one parameters called name and assigns to it name
//new Person('John') is a new instance
//here typeof will return "object" as the type of a value as a string