/**
 * Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно, фильтр должен работать так:  
 * const fruits = [‘orange’, ‘apple’, ‘banana’, ‘’]
 *
 * filterByLength(fruits, 0,5) // [‘apple’, ‘’]
 */

function filterByLength(array, ...lengths) {
    return array.filter(elem => lengths.includes(elem.length))
}

const fruits = ['orange', 'apple', 'banana', '']
console.log(filterByLength(fruits, 0, 5))

const cars = ['Honda', 'Toyota', 'BMW', 'Lada', 'Opel']
console.log(filterByLength(cars, 4, 3))
