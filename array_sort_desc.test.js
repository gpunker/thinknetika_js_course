describe('Реализовать функцию для фильтрации массива чисел по убыванию', () => {
    describe('#sortDesc1', () => {
        describe('when gets an array of numbers', () => {
            it('returns a descending sorted array', () => {
                assert.deepEqual(sortDesc1([2,3,1]), [3, 2, 1])
            })
        })
    })
    
    describe('#sortDesc2', () => {
        describe('when gets an array of numbers', () => {
            it('returns a descending sorted array', () => {
                assert.deepEqual(sortDesc2([2,3,1]), [3, 2, 1])
            })
        })
    })
})