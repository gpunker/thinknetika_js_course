// 3. Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:
// 
// Есть следующее расширение объектов: 
// Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник
// 
// Есть следующий объект, в котором свойства лежат кучей:
// const john = {
//   name: "John",
//   lastName: "Smith",
//   position: "Senior engineer",
//   startDate: "10.10.1990",
//   endDate: "10.10.2000",
//   baseSalary: "10000",
//   salaryCurrency: "$",
//   location: "Russia",
//   department: "IT",
//   phoneNumber: "+1234567890",
//   eat: function() {},
//   sleep: function() {},
//   callFriend: function() {},
//   writeReport: function() {},
//   organizeMeeting: function () {},
//   retire: function () {},
//   startVacation: function () {}
// };

const Human = function({ name, lastName, phoneNumber }) {
    this.name = name
    this.lastName = lastName
    this.phoneNumber = phoneNumber

    this.eat = function() { return `${this.name} is eating` }
    this.sleep = function() { return `${this.name} is sleeping` }
    this.callFriend = function() { return `${this.name} is calling friend` }
}

const Employee = function({
    name,
    lastName,
    phoneNumber,
    position,
    baseSalary,
    salaryCurrency,
    location,
    department 
}) {
    Human.call(this, { name: name, lastName: lastName, phoneNumber: phoneNumber })    

    this.position = position
    this.baseSalary = baseSalary
    this.salaryCurrency = salaryCurrency
    this.location = location
    this.department = department
}

const WorkingEmployee = function({
    name,
    lastName,
    phoneNumber,
    position,
    baseSalary,
    salaryCurrency,
    location,
    department,
    startDate,
    endDate
}) {
    Employee.call(this, {
        name: name,
        lastName: lastName,
        phoneNumber: phoneNumber,
        position: position,
        baseSalary: baseSalary,
        salaryCurrency: salaryCurrency,
        location: location,
        department: department,
    })

    this.startDate = startDate
    this.endDate = endDate

    this.writeReport = function() { return `${this.name} is writing a report` }
    this.organizeMeeting = function() { return `${this.name} is starting a meeting` }
    this.retire = function() { return `${this.name} is retiring` }
    this.startVacation = function() { return `${this.name} is going to vacation` }
}

Employee.prototype = Object.create(Human.prototype)
Object.defineProperty(Employee.prototype, 'constructor', {
    value: Employee,
    enumerable: false,
    writable: true
})
WorkingEmployee.prototype = Object.create(Employee.prototype)
Object.defineProperty(WorkingEmployee.prototype, 'constructor', {
    value: WorkingEmployee,
    enumerable: false,
    writable: true
})

const john = {
    name: "John",
    lastName: "Smith",
    position: "Senior engineer",
    startDate: "10.10.1990",
    endDate: "10.10.2000",
    baseSalary: "10000",
    salaryCurrency: "$",
    location: "Russia",
    department: "IT",
    phoneNumber: "+1234567890"
}

const employee = new WorkingEmployee(john)
console.log(WorkingEmployee.prototype.constructor)
console.log(employee)
console.log(employee.eat())
console.log(employee.sleep())
console.log(employee.callFriend())
console.log(employee.writeReport())
console.log(employee.organizeMeeting())
console.log(employee.retire())
console.log(employee.startVacation())