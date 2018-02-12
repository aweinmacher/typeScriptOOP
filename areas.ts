// describes what basic properties all the shapes should implement
interface Shape {
    color: string;
    getArea(): number;
}

class Rectangle implements Shape {
    public width: number;
    public length: number;
    public color: string;
    constructor(width: number, length: number, color: string) {
        this.width = width;
        this.length = length;
        this.color = color;
    }
    public getArea() {
        return this.width*this.length;
    }
}

class Triangle implements Shape {
    public a: number;
    public b: number;
    public c: number;
    public color: string;
    constructor(a: number, b: number, c: number, color: string) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.color = color;
    }
    public getArea() {
        let p = (this.a+this.b+this.c)/2;
        return Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
    }
}

class Circle implements Shape {
    public radius: number;  
    public color: string;
    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }
    public getArea() {
        return Math.PI*this.radius*this.radius;
    }
}

var myRectangle = new Rectangle(3, 4, 'red');
var myTriangle = new Triangle(3, 4, 5, 'yellow');
var myCircle = new Circle(10, 'blue');

var shapesArray = new Array<Shape>();
shapesArray.push(myRectangle, myTriangle, myCircle);

shapesArray.forEach((item) => {console.log(item.getArea())});