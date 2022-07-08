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

const Human = function(name, lastName, phoneNumber) {
    this.name = name
    this.lastName = lastName
    this.phoneNumber = phoneNumber
}

Human.prototype = {
    eat: function() { return `${this.name} is eating` },
    sleep: function() { return `${this.name} is sleeping` },
    callFriend: function() { return `${this.name} is calling friend` },
}
Human.prototype.constructor = Human

const Employee = function(
    name,
    lastName,
    phoneNumber,
    position,
    baseSalary,
    salaryCurrency,
    location,
    department 
) {
    this.name = name
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.position = position
    this.baseSalary = baseSalary
    this.salaryCurrency = salaryCurrency
    this.location = location
    this.department = department
}

Employee.prototype = Object.create(Human.prototype)
Employee.prototype.constructor = Employee

const WorkingEmployee = function(
    name,
    lastName,
    phoneNumber,
    position,
    baseSalary,
    salaryCurrency,
    location,
    department,
    startDate,
) {
    this.name = name
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.position = position
    this.baseSalary = baseSalary
    this.salaryCurrency = salaryCurrency
    this.location = location
    this.department = department
    this.startDate = startDate
}

WorkingEmployee.prototype = Object.create(Employee.prototype)
WorkingEmployee.prototype.constructor = WorkingEmployee

WorkingEmployee.prototype.writeReport = function() { return `${this.name} is writing a report` }
WorkingEmployee.prototype.organizeMeeting = function() { return `${this.name} is starting a meeting` }
WorkingEmployee.prototype.retire = function() { return `${this.name} is retiring` }
WorkingEmployee.prototype.startVacation = function() { return `${this.name} is going to vacation` }

const ExEmployee = function(
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
) {
    this.name = name
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.position = position
    this.baseSalary = baseSalary
    this.salaryCurrency = salaryCurrency
    this.location = location
    this.department = department
    this.startDate = startDate
    this.endDate = endDate
}

ExEmployee.prototype = Object.create(WorkingEmployee.prototype)
ExEmployee.prototype.constructor = ExEmployee


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

const employee = new ExEmployee(
    john.name,
    john.lastName,
    john.phoneNumber,
    john.position,
    john.baseSalary,
    john.salaryCurrency,
    john.location,
    john.department,
    john.startDate,
    john.endDate
)

console.log(ExEmployee.prototype)
console.log(employee)
console.log(employee.eat())
console.log(employee.sleep())
console.log(employee.callFriend())
console.log(employee.writeReport())
console.log(employee.organizeMeeting())
console.log(employee.retire())
console.log(employee.startVacation())