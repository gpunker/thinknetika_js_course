/**
 * 1. Модифицировать прототип Array, добавив в него метод shuffle, 
 *    чтобы получить возможность выполнять случайную сортировку для любого массива
*/

Array.prototype.shuffle = function() {
    this.sort(() => Math.random() - 0.5);
}

const arr = [1, 2, 3, 4, 5]
arr.shuffle()
console.log(arr)