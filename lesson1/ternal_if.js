console.log('Проверка прав с помощью тернарного оператора if')

function checkAccess({ age, paid, blocked, badUsername, isAdmin }) {
    const isCorrectAge = age >= 18 && age <= 35
    const isCorrectAdmin = isAdmin && isCorrectAge

    isCorrectAdmin || (isCorrectAge && paid && !blocked && !badUsername) ? console.log('Доступ разрешен.') : console.log('Доступ запрещен.')
}

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