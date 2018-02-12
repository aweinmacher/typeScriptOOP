class Animal implements CreatureInterface {
    public static legs: number = 4;
    public furry: boolean;
    public domestic: boolean;
    public age: number;
    protected createdAt: Date;
    private _name: string;
    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        if (newName.length > 2) {
            this._name = newName;
        }
        else {
            console.log("Error: provided name must be longer than 2 characters");
        }
    }
    constructor(name: string, furry: boolean, domestic: boolean, age: number, createdAt: Date) {
        this.name = name; // will go to the setter function
        this.furry = furry;
        this.domestic = domestic;
        this.age = age;
        this.createdAt = createdAt;
    }
}
var bobby = new Animal("Bobby", true, true, 4, new Date());
console.log(bobby.age);
console.log(bobby.name);
bobby.name = 'ah';
console.log("Every animal has " + Animal.legs + " legs");

class Dog extends Animal {
    constructor(name: string, furry: boolean, domestic: boolean, age: number, createdAt: Date) {
        super(name, furry, domestic, age, createdAt);
    }
    bark() {
        console.log('Woof!')
    }
}

// Partner Exercise 1
class Employee implements PersonInterface{
    public firstName: string;
    public lastName: string;
    public department: string;
    public manager: Manager;
    private salary: number;
    constructor(firstName: string, lastName: string, department: string, manager: Manager, salary: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.manager = manager;
        this.salary = salary;
    }
    public greet() {
        return `Hi, I’m ${this.firstName} ${this.lastName} and I work in the ${this.department} department`
    }
}

// Partner Exercise 2
class Manager extends Employee implements PersonInterface {
    public subordinates: Array<Employee>;
    constructor(firstName: string, lastName: string, department: string, manager: Manager, salary: number, subordinates: Array<Employee>) {
        super(firstName, lastName, department, manager, salary);
        this.subordinates = subordinates;
    }
    public fireSubordinates() {
        this.subordinates.forEach((item) => console.log(`${item.firstName} ${item.lastName}, you’re fired`))
    }
    public greet() {
        return `Hi, I’m ${this.firstName} ${this.lastName} and I manage the ${this.department} department`
    }
}

// Partner Exercise 3
class Customer implements PersonInterface{
    public firstName:string;
    public lastName:string;
    public companyName:string;
    constructor(firstName:string, lastName:string, companyName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
    }
    public greet() {
        return `Hi, I’m ${this.firstName} ${this.lastName} and I'm a customer from ${this.companyName}`
    }
    public static getFullName(firstName:string, lastName:string) {
        return `${firstName} ${lastName}`
    }
}

interface PersonInterface {
    firstName: string;
    lastName:string;
    greet();
}

var manager1 = new Manager('Adam', 'Smith', 'RnD', null, 10000, []);
var manager2 = new Manager('David', 'Horovits', 'Sales', null, 20000, []);
var employee1 = new Employee('Bob', 'Rabinovich', 'RnD', manager1, 5000);
var employee2 = new Employee('Magda', 'Gebbels', 'Sales', manager2, 7000);
var customer1 = new Customer('Zeev', 'Malkov', 'Phillips');
var customer2 = new Customer('Walt', 'Disney', 'Pixar');

var peopleArray = new Array<PersonInterface>();
peopleArray.push(manager1, manager2, employee1, employee2, customer1, customer2);

for (const person of peopleArray) {
    console.log(`${Customer.getFullName(person.firstName, person.lastName)}'s greeting: ${person.greet()}`);
}

// Interfaces
interface CreatureInterface {
    name: string;
    age: number;
}
class Person implements CreatureInterface {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
var creatureArray = new Array<CreatureInterface>();
creatureArray.push(new Animal("Bobby", true, true, 2, new Date()));
creatureArray.push(new Animal("Justin", true, false, 5, new Date()));
creatureArray.push(new Animal("Lennox", false, false, 12, new Date()));
creatureArray.push(new Person("David", 35));
creatureArray.push(new Person("Leonard", 22));

for (const creature of creatureArray) {
    console.log("name is " + creature.name);
    console.log("age is " + creature.age);
}