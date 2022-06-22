function checkAccess({ age, paid, blocked, badUsername, isAdmin }) {
    const isCorrectAge = age >= 18 && age <= 35

    if (isAdmin && isCorrectAge) {
        console.log('Пользователь является администратором. Доступ разрешен.')
        return true
    } else if (isCorrectAge && paid && !blocked && !badUsername) {
        console.log('Доступ разрешен.')
        return true
    } else {
        console.log('Доступ запрещен.')
        return false
    }
}

console.log('Проверка прав')
console.log('Простой пользователь:')
var user = {
    age: 18,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
}
checkAccess(user)

console.log('Пользователь-администратор:')
var user = {
    age: 18,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: true
}
checkAccess(user)

console.log('Пользователь не оплатил подписку:')
var user = {
    age: 18,
    paid: false,
    blocked: false,
    badUsername: false,
    isAdmin: false
}
checkAccess(user)
