/**
 * 1. Модифицировать прототип Array, добавив в него метод shuffle, 
 *    чтобы получить возможность выполнять случайную сортировку для любого массива
*/

Array.prototype.shuffle = function() {
    const shuffled = []
    const copy = [...this]
    
    while(copy.length > 0) {
        const i = Math.floor(Math.random() * copy.length);
        shuffled.push(copy[i])
        copy.splice(i, 1)
    }
    
    return shuffled
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.shuffle())