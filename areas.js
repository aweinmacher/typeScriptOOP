var Rectangle = /** @class */ (function () {
    function Rectangle(width, length, color) {
        this.width = width;
        this.length = length;
        this.color = color;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c, color) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.color = color;
    }
    Triangle.prototype.getArea = function () {
        var p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    };
    return Triangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var myRectangle = new Rectangle(3, 4, 'red');
var myTriangle = new Triangle(3, 4, 5, 'yellow');
var myCircle = new Circle(10, 'blue');
var shapesArray = new Array();
shapesArray.push(myRectangle, myTriangle, myCircle);
shapesArray.forEach(function (item) { console.log(item.getArea()); });
