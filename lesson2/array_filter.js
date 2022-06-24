/**
 * Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно, фильтр должен работать так:  
 * const fruits = [‘orange’, ‘apple’, ‘banana’, ‘’]
 *
 * filterByLength(fruits, 0,5) // [‘apple’, ‘’]
 */

// реализация с использованием функции фильтрации
function filterByLength1(array, ...lengths) {
    return array.filter(elem => lengths.includes(elem.length))
}

// самостоятельная реализация
function filterByLength2(array, ...lengths) {
    let filtered = []

    array.forEach(elem => {
         if (lengths.includes(elem.length)) {
            filtered.push(elem)
        }
    })

    return filtered
}

const fruits = ['orange', 'apple', 'banana', '']
console.log('Первая реализация:')
console.log(filterByLength1(fruits, 0, 5))
console.log('Вторая реализация:')
console.log(filterByLength2(fruits, 0, 5))

const cars = ['Honda', 'Toyota', 'BMW', 'Lada', 'Opel']
console.log('Первая реализация:')
console.log(filterByLength1(cars, 4, 3))
console.log('Вторая реализация:')
console.log(filterByLength2(cars, 4, 3))
