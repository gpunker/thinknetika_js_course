/**
 * Создать пустой объект и наполнить его данными:
 * 1. Добавить свойство name и записать в него значение ‘Alex’
 * 2. Добавить свойство lastName и записать в него значение ‘Smith’
 * 3. Присвоить значение ‘Bob’ в свойство name
 * 4. Удалить оба свойства
 */

let human = {
    name: 'Alex',
    lastName: 'Smith'
}
console.log('Создали объект')
console.log(human)

human.name = 'Bob'
console.log('Поменяли name')
console.log(human)

delete human.name
delete human.lastName
console.log('Удалили оба свойства')
console.log(human)