describe('Реализовать функцию для фильтрации массива по длине слов', () => {
    describe('#filterByLength1', () => {
        describe('when gets an array of numbers', () => {
            it('returns a descending sorted array', () => {
                assert.deepEqual(filterByLength1(['apple', 'orange', 'banana'], 6), ['orange', 'banana'])
            })
        })
    })
    
    describe('#filterByLength2', () => {
        describe('when gets an array of numbers', () => {
            it('returns a descending sorted array', () => {
                assert.deepEqual(filterByLength2(['apple', 'orange', 'banana'], 6), ['orange', 'banana'])
            })
        })
    })
})