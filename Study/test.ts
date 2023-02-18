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
    constructor (name: string, company: string) {
        super(name);
        this.company = company;
    }
    print(): void {
        super.print();
        console.log(`Работает в компании ${this.company}`)
    }
}

let Baka: Employee = new Employee("Max", "FSO");

Baka.print();