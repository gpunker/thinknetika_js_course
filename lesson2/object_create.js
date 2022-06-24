/**
 * Создать объект human со следующими возможностями:
 * 1. При записи значения в свойство fullName имя и фамилия должны записываться 
 *    в отдельные свойства firstName и lastName
 * 2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
 * 3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age 
 *    в зависимости от разницы года рождения и текущего года
 */

let human = Object.create({}, {
    fullName: {
        set: function(value) {
            [this.firstName, this.lastName] = value.split(' ')
        },
        get() {
            return this.firstName + ' ' + this.lastName
        }
    },
    dateOfBirth: {
        set: function(value) {
            this.age = (new Date).getFullYear() - value.getFullYear()
        }
    }
})

human.fullName = 'Johnny Bravo'
console.log('firstName: ' + human.firstName)
console.log('lastName: ' + human.lastName)
console.log('fullName: ' + human.fullName)

human.dateOfBirth = new Date('1983-10-23')
console.log('age: ' + human.age)

console.log(human)