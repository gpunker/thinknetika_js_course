/**
 * 2. С помощью прототипа реализовать структуру "Квадрат" которая будет расширять структуру "Прямоугольник", 
 * должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр
 */

var Rectangle = function(a, b) {
    this.a = a
    this.b = b
}

Rectangle.prototype = {
    perimeter: function() {
        return (this.a + this.b) * 2
    },
    square: function() {
        return this.a * this.b
    }
}

var Square = function(a) {
    this.a = a
}

Square.prototype.constructor = Rectangle


const rect = new Rectangle(4, 8)
console.log(`Периметр прямоугольника: ${rect.perimeter()}`)
console.log(`Периметр прямоугольника: ${rect.square()}`)

const square = new Square(5)
console.log(square)
console.log(`Периметр квадрата: ${square.perimeter()}`)
console.log(`Периметр квадрата: ${square.square()}`)