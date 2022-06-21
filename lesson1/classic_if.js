function checkAccess(user) {
    if (user.isAdmin && (user.age >= 18 && user.age <= 35)) {
        console.log('Пользователь является администратором. Доступ разрешен.')
        return true
    } else if ((user.age >= 18 && user.age <= 35) && user.paid && !user.blocked && !user.badUsername) {
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
