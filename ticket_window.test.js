describe('Система продажи билетов', () => {
    describe('TicketWindow::', () => {
        const ticketWindow = () => new TicketWindow()

        describe('#createEvent', () => {
            let tw = ticketWindow()
            
            describe('when event doesn\'t exists', () => {
                it('creates a new event', () => {
                    assert.isUndefined(tw.createEvent('Metallica', 500))
                    assert.deepInclude(tw.getEvents(), { 'Metallica': { price: 500, sum: 0 } })
                })
            })

            describe('when event exists', () => {
                it('throws an error', () => {
                    assert.throws(() => { tw.createEvent('Metallica', 1000) }, 'Мероприятие уже существует!')
                })
            })
        })

        describe('#getEvents', () => {
            let tw = ticketWindow()

            before(() => tw.createEvent('Metallica', 500))

            it('returns an object with events', () => {
                assert.deepInclude(tw.getEvents(), { 'Metallica': { price: 500, sum: 0 } })
            })
        })

        describe('#buyTicket', () => {
            let tw = ticketWindow()

            before(() => tw.createEvent('Metallica', 500))

            it('returns an id of solded ticket', () => {
                assert.isNumber(tw.buyTicket('Metallica'))
            })
        })

        describe('#returnTicket', () => {
            let tw = ticketWindow()
            let ticketId = null
            
            before(() => {
                tw.createEvent('Metallica', 500)
                ticketId = tw.buyTicket('Metallica')
            })
            
            it('returns a ticket and descends sum of solded tickets at event', () => {
                assert.deepInclude(tw.getEvents(), { 'Metallica': { price: 500, sum: 500 } })
                assert.isUndefined(tw.returnTicket(ticketId))
                assert.deepInclude(tw.getEvents(), { 'Metallica': { price: 500, sum: 0 } })
            })
        })
    })
})