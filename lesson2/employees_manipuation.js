/**
 * Есть массив сотрудников компании
 * Нужно выполнить с ним следующие преобразования:
 * 1. Узнать среднюю зарплату сотрудников
 * 2. Отсортировать сотрудников по зарплате
 * 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет
 */

 const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
]
const salarySum = (sumInit, element) => sumInit + element.salary
const midSalary = employees.reduce(salarySum, 0) / employees.length
console.log('Средняя зарплата = ' + midSalary)

const sortedBySalary = employees.sort((a, b) => a.salary - b.salary)
console.log('Отсортированные по зарплате:')
console.log(sortedBySalary)

const filtered = employees.filter(elem => elem.salary > 4500 && elem.age > 25)
console.log('С ЗП > 4500 и возрастом > 25 лет:')
console.log(filtered)