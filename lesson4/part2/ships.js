// Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей 

// Для моторных кораблей доступны следующие специфичные характеристики:
// Мощность двигателя
// Материал корпуса

// Для парусных кораблей доступны следующие специфичные характеристики:
// Количество мачт
// Общая площадь парусов

// Что можно делать в верфи:
// Строить корабли - только своего типа
// Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Перекрашивать корабли - Можно красить любые корабли
// Обменивать старый корабль на новый - Можно обменивать только корабли того же типа

// Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы.
// Задание потребует воспользоваться гуглом для решения. 

// Верфи и корабли должны создаваться с помощью функций-конструкторов.

const Ship = function() {
    this.broken = false
    this.color = 'white'
}

const MotorShip = function(engineHp, frameMaterial) {
    this.engineHp = engineHp
    this.frameMaterial = frameMaterial
}
MotorShip.prototype = new Ship

const SailShip = function(mastCount, sailArea) {
    this.mastCount = mastCount
    this.sailArea = sailArea
}
SailShip.prototype = new Ship

const Shipyard = function() {
    function unimplemented(funcName) {
        throw new Error(`Function ${funcName} is unimplemented`)
    }

    this.paint = function(ship, color) { 
        ship.color = color
        return ship
    }

    this.swap = function(ship) {
        switch (true) {
            case ship instanceof MotorShip:
                return new MotorShip(ship.engineHp, ship.frameMaterial)
            case ship instanceof SailShip:
                return new SailShip(ship.mastCount, ship.sailArea)
        }
    }
    this.repair = function(ship) {
        ship.broken = false
        return ship
    }

    this.build = function() {
        unimplemented('build')
    }
}

const MotorShipyard = function() {
    this.repair = function(ship) {
        if (!(ship instanceof MotorShip)) {
            throw TypeError('Верфь может обслуживать только моторные корабли')
        }
        return Object.getPrototypeOf(this).repair(ship)
    }

    this.build = function(engineHp, frameMaterial) {
        return new MotorShip(engineHp, frameMaterial)
    }
}
MotorShipyard.prototype = new Shipyard

const SailShipyard = function() {
    this.repair = function(ship) {
        if (!(ship instanceof SailShip)) {
            throw TypeError('Верфь может обслуживать только парусные корабли')
        }
        return Object.getPrototypeOf(this).repair(ship)
    }

    this.build = function(mastCount, sailArea) {
        return new SailShip(mastCount, sailArea)
    }
}
SailShipyard.prototype = new Shipyard

const motorShipyard = new MotorShipyard()
console.log('строим моторный корабль')
const motorShip = motorShipyard.build(350, 'metal')
console.log(motorShip)
console.log(Object.getPrototypeOf(motorShip))
console.log('ломаем моторный корабль')
motorShip.broken = true
console.log(motorShip)
console.log('ремонтируем моторный корабль')
motorShipyard.repair(motorShip)
console.log(motorShip)
console.log('красим моторный корабль в красный')
motorShipyard.paint(motorShip, 'red')
console.log(motorShip)
console.log('меняем моторный корабль')
const swapedMotorship = motorShipyard.swap(motorShip)
console.log(swapedMotorship)
console.log()

const sailShipyard = new SailShipyard()
console.log('строим парусный корабль')
const sailShip = sailShipyard.build(2, 25)
console.log(sailShip)
console.log(Object.getPrototypeOf(sailShip))
console.log('ломаем парусный корабль')
sailShip.broken = true
console.log(sailShip)
console.log('ремонтируем парусный корабль')
sailShipyard.repair(sailShip)
console.log(sailShip)
console.log('красим парусный корабль в красный')
sailShipyard.paint(sailShip, 'blue')
console.log(sailShip)
console.log('меняем парусный корабль')
const swapedSailhip = sailShipyard.swap(sailShip)
console.log(swapedSailhip)

console.log('пытаемся отремонтировать парусный корабль в верфи для моторных кораблей')
motorShipyard.repair(swapedSailhip)