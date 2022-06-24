/**
 * Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент
 */

// В теории в массивах могут оказаться объекты и для их сравнения придется писать отдельную
// рекрсивную функцию. Могу дописать, коли нужно.
function arraysCompare(array1, array2) {
    const maxLength = array1.length > array2.length ? array1.length : array2.length

    for (let i = 0; i < maxLength; i++) {
        if (array1[i] != array2[i]) {
            return false
        }
    }

    return true
}

// равные массивы
var a1 = [1, 2, 4, 5, 6]
var a2 = [1, 2, 4, 5, 6]
console.log(arraysCompare(a1, a2))

// неравные массивы
var a1 = [1, 3, 4, 5, 6]
var a2 = [1, 2, 4, 5, 6]
console.log(arraysCompare(a1, a2))

// неравные массивы со строками
var a1 = ['a', 'b', 'c', 'd', 'e']
var a2 = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(arraysCompare(a1, a2))