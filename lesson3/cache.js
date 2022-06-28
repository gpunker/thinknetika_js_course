/**
 * Кэширование
 * 
 * Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.
 * 
 * Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и 
 * возвращающую результат. 
 * Функция должна запоминать аргументы, которые она уже получала и возвращать 
 * результат сразу, не вычисляя его повторно
 * 
 * Пример:  
 * const calculate = cache();
 * 
 * calculate(3, 3); // { value: 27, fromCache: false}
 * calculate(2, 10); // { value: 1024, fromCache: false}
 * calculate(2, 10); // { value: 1024, fromCache: true}
 */

function calculate(num, pow) {
    let cachedNum = 0
    console.log(cachedNum)
    let cachedPow = 0
    let cachedResult = 0

    if (cachedNum != num && cachedPow != pow) {
        return {
            value: power(num, pow),
            fromCache: false
        }
    }

    return {
        value: cachedResult,
        fromCache: true
    }

    function power(num, pow) {
        cachedNum = num
        cachedPow = pow
        cachedResult = Math.pow(num, pow)
        return cachedResult
    }
}

console.log(calculate(2,2))
console.log(calculate(2,2))
console.log(calculate(3,2))
console.log(calculate(2,2))