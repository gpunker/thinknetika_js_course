describe('Кэширование', () => {
    describe('#cache', () => {
        it('returns a function', () => {
            assert.typeOf(cache(), 'function')
        })

        describe('#calculate', () => {
            describe('when exponentiation of number', () => {
                it('returns an object with value and fromCache flag', () => {
                    assert.deepEqual(calculate(3, 3), { value: 27, fromCache: false})
                })
            })

            describe('when result gets from cache', () => {
                it('returns an object with value and fromCache flag', () => {
                    assert.deepEqual(calculate(3, 3), { value: 27, fromCache: true})
                })
            })
        })
    })
})