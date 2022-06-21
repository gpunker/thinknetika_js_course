console.log('Проверка прав с помощью тернального оператора if')

function checkAccess(user) {
    (user.isAdmin && (user.age >= 18 && user.age <= 35)) ||
      ((user.age >= 18 && user.age <= 35) && user.paid && !user.blocked && !user.badUsername) ? console.log('Доступ разрешен.') : console.log('Доступ запрещен.')
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