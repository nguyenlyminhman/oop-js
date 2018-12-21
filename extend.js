class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sleep(){
        return "ZZZzzz"
    }
}

class Employee extends Person{
    constructor(name, salary){
        super(name) //extend name from Person. Donot extend age.
        this.salary = salary
    }
}

const p = new Person('Man', 30);
console.log("name: " + p.name);
console.log("age: " + p.age);
console.log("sleep: " + p.sleep());

//--------------------------------
const e = new Employee('Man', 30);
console.log("name: " + e.name);
console.log("age: " +e.age); //age: undefined. because it is not extended
console.log("salary: " +e.salary);
console.log("sleep: " + e.sleep());
