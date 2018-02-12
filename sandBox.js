var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, furry, domestic, age, createdAt) {
        this.name = name; // will go to the setter function
        this.furry = furry;
        this.domestic = domestic;
        this.age = age;
        this.createdAt = createdAt;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName.length > 2) {
                this._name = newName;
            }
            else {
                console.log("Error: provided name must be longer than 2 characters");
            }
        },
        enumerable: true,
        configurable: true
    });
    Animal.legs = 4;
    return Animal;
}());
var bobby = new Animal("Bobby", true, true, 4, new Date());
console.log(bobby.age);
console.log(bobby.name);
bobby.name = 'ah';
console.log("Every animal has " + Animal.legs + " legs");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, furry, domestic, age, createdAt) {
        return _super.call(this, name, furry, domestic, age, createdAt) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof!');
    };
    return Dog;
}(Animal));
// Partner Exercise 1
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, department, manager, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.manager = manager;
        this.salary = salary;
    }
    Employee.prototype.greet = function () {
        return "Hi, I\u2019m " + this.firstName + " " + this.lastName + " and I work in the " + this.department + " department";
    };
    return Employee;
}());
// Partner Exercise 2
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName, department, manager, salary, subordinates) {
        var _this = _super.call(this, firstName, lastName, department, manager, salary) || this;
        _this.subordinates = subordinates;
        return _this;
    }
    Manager.prototype.fireSubordinates = function () {
        this.subordinates.forEach(function (item) { return console.log(item.firstName + " " + item.lastName + ", you\u2019re fired"); });
    };
    Manager.prototype.greet = function () {
        return "Hi, I\u2019m " + this.firstName + " " + this.lastName + " and I manage the " + this.department + " department";
    };
    return Manager;
}(Employee));
// Partner Exercise 3
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, companyName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
    }
    Customer.prototype.greet = function () {
        return "Hi, I\u2019m " + this.firstName + " " + this.lastName + " and I'm a customer from " + this.companyName;
    };
    Customer.getFullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    return Customer;
}());
var manager1 = new Manager('Adam', 'Smith', 'RnD', null, 10000, []);
var manager2 = new Manager('David', 'Horovits', 'Sales', null, 20000, []);
var employee1 = new Employee('Bob', 'Rabinovich', 'RnD', manager1, 5000);
var employee2 = new Employee('Magda', 'Gebbels', 'Sales', manager2, 7000);
var customer1 = new Customer('Zeev', 'Malkov', 'Phillips');
var customer2 = new Customer('Walt', 'Disney', 'Pixar');
var peopleArray = new Array();
peopleArray.push(manager1, manager2, employee1, employee2, customer1, customer2);
for (var _i = 0, peopleArray_1 = peopleArray; _i < peopleArray_1.length; _i++) {
    var person = peopleArray_1[_i];
    console.log(Customer.getFullName(person.firstName, person.lastName) + "'s greeting: " + person.greet());
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var creatureArray = new Array();
creatureArray.push(new Animal("Bobby", true, true, 2, new Date()));
creatureArray.push(new Animal("Justin", true, false, 5, new Date()));
creatureArray.push(new Animal("Lennox", false, false, 12, new Date()));
creatureArray.push(new Person("David", 35));
creatureArray.push(new Person("Leonard", 22));
for (var _a = 0, creatureArray_1 = creatureArray; _a < creatureArray_1.length; _a++) {
    var creature = creatureArray_1[_a];
    console.log("name is " + creature.name);
    console.log("age is " + creature.age);
}
