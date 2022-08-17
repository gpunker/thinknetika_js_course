describe('#sumAndCountOfPositives', () => {
    describe('when gets an array', () => {
        it('returns an object with count and sum of positive numbers', () => {
            assert.deepEqual(sumAndCountOfPositives([-1, -2, -3, 4, -5, 6]), { count: 2, sum: 10 })
        })
    })

    describe('when gets not array', () => {
        it('throws an error', () => {
            assert.throws(() => sumAndCountOfPositives(1), 'Argument must be an Array')
        })
    })
})