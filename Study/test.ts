class Person {
    name: string;
    constructor (userName: string) {
        this.name = userName;
    }
    print(): void {
        console.log(`Имя: ${this.name}`)
    }
}

class Employee extends Person {
    company: string;
    work(): void {
        console.log(`${this.name} работает в компании ${this.company}`)
    }
}

let Baka: Employee = new Employee("Max");

Baka.print();