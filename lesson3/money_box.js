/**
 * Копилка
 * 
 * Замыкания могут применяться для простой реализации инкапсуляции, 
 * т.е. для того чтобы скрыть реализацию какой-то функциональности.
 *
 * Реализуйте функцию MoneyBox, который будет создавать объект с двумя методами:
 *   addCoin - Добавляет 1 монету в копилку 
 *   getAmount - Возвращает количество монет в копилке 
 * Не должно быть возможности задать количество монет напрямую, минуя метод addCoin. 
 * При создании в копилке нет монет.
 *
 * Пример:  
 * const box = new MoneyBox();
 * 
 * box.getAmount(); // 0
 * box.addCoin();
 * box.addCoin();
 * box.getAmount(); // 2
 */

const MoneyBox = function() {
    let amount = 0

    this.addCoin = () => { amount++; return }
    this.getAmount = () => amount
}

// let box = new MoneyBox()
// console.log(box)
// console.log(box.getAmount())
// box.addCoin()
// box.addCoin()
// console.log(box.getAmount())

// // пробуем напрямую изменить число и получим только то что добавили
// box.amount = 10
// console.log(box.getAmount())
