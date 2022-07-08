/**
 * 1. Модифицировать прототип Array, добавив в него метод shuffle, 
 *    чтобы получить возможность выполнять случайную сортировку для любого массива
*/

Array.prototype.shuffle = function() {
    const shuffled = []
    
    while(this.length > 0) {
        const i = Math.floor(Math.random() * this.length);
        shuffled.push(this[i])
        this.splice(i, 1)
    }

    Object.assign(this, shuffled)
    return
}

const arr = [1, 2, 3, 4, 5]
arr.shuffle()
console.log(arr)