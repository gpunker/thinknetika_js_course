/**
 * Реализовать функцию для сортировки массива чисел по убыванию
 * const numbers = [-20, -10, 0, 10, 20, 30]
 *
 * sortDesc(numbers) // [30, 20, 10, 0, -10, -20]
 */

function sortDesc1(array) {
    return array.sort((a, b) => b - a)
}

// алгоритм быстрой сортировки
function sortDesc2(array) {
    if (array.length < 2) {
        return array
    } else {
        let pivot = array[0]
        let rest = array.slice(1)
        let less = rest.filter(elem => elem < pivot)
        let greater = rest.filter(elem => elem > pivot)

        return sortDesc2(greater).concat([pivot].concat(sortDesc2(less)))
    }
}

const numbers = [-20, -10, 0, 10, 20, 30]
console.log('Первая реализация:')
console.log(sortDesc1(numbers))
console.log('Вторая реализация:')
console.log(sortDesc2(numbers))