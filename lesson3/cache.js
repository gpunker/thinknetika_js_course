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

 function cache() {
    let cachedNum = 0
    let cachedPow = 0
    let cachedResult = 0

    function power(num, pow) {
      let fromCache = num === cachedNum && pow === cachedPow

      if (!fromCache) {
        cachedNum = num
        cachedPow = pow
        cachedResult = Math.pow(num, pow)
      }

      return {
        value: cachedResult,
        fromCache: fromCache
      }
    }

    return power
}

const calculate = cache()

console.log(calculate(2,2))
console.log(calculate(2,2))
console.log(calculate(3,2))
console.log(calculate(2,2))