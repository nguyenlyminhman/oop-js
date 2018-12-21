class Person{
    constructor(name){
        this.name = name
    }

    yeb(){
        return `My name is ${this.name}`
    }
}
console.log("Person Class")
const neko = new Person('Meow')
console.log("=> " + neko.yeb())

class Student extends Person{
    constructor(name, grade){
        super(name)
        this.grade = grade
    }

    yeb(){
        return `My name is ${this.name}. My grade is ${this.grade}`
    }
}

const nekoLee = new Student('NekoLee', 8.9)
console.log("Student Class")
console.log("=> " + nekoLee.yeb())