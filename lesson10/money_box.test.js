describe('Реализуйте функцию MoneyBox', () => {
    describe('MoneyBox::', () => {
        const moneyBox = () => new MoneyBox()

        describe('#addCoin', () => {
            it('increments count of coins and returns undefined', () => {
                assert.isUndefined(moneyBox().addCoin())
            })
        })

        describe('#getAmount', () => {
            it('returns count of coins', () => {
                let box = moneyBox()
                
                assert.equal(box.getAmount(), 0)
                box.addCoin()
                assert.equal(box.getAmount(), 1)
            })
        })
    })
})