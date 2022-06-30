// 4. Система продажи билетов 
// 
// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их   
// ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
// случайный шестизначный ID билета, создать ID можно любым способом */
// 
// ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */

function TicketWindow() {
    let events = {}
    let buyedTickets = {}

    function generateTicketId() {
        return Math.round(Math.random() * 1000000)
    }

    function isEventExists(eventName) {
        return events[eventName] !== undefined && typeof events[eventName] === 'object'
    }

    return {
        createEvent: (eventName, price) => {
            if (isEventExists(eventName)) {
                console.log('Мероприятие уже существует!')
            } else {
                events[eventName] = { price: price, sum: 0 }
            }

            console.log(events)
            console.log(buyedTickets)
        },
        buyTicket: (eventName) => {
            if (!isEventExists(eventName)) {
                console.log('Мероприятия не существует!')
                return
            }

            let ticketId = generateTicketId()

            events[eventName].sum += events[eventName].price
            buyedTickets[ticketId] = { eventName: eventName }

            console.log(events)
            console.log(buyedTickets)
            
            return ticketId
        },
        returnTicket: (ticketId) => {
            let eventName = buyedTickets[ticketId].eventName

            events[eventName].sum -= events[eventName].price
            delete buyedTickets[ticketId]

            console.log(events)
            console.log(buyedTickets)
        }
    }
}

const ticketWindow = new TicketWindow()
console.log('Создали мероприятие')
ticketWindow.createEvent('Metallica', 300)
console.log('Покупка первого билета')
const firstTicket = ticketWindow.buyTicket('Metallica')
console.log(firstTicket)
console.log('Покупка билета на несуществующий концерт')
ticketWindow.buyTicket('Slayer')
console.log('Покупка второго концерт')
const secondTicket = ticketWindow.buyTicket('Metallica')
console.log(secondTicket)
console.log('Возврат первого билета')
ticketWindow.returnTicket(firstTicket)

