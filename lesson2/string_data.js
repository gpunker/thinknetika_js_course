/**
 * Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой
 * { word: 'smth', length: 1, isCapitalized: false}
 */

function wordInfo(word) {
    const firstLetter = word[0]

    return {
        word: word,
        length: word.length,
        isCapitalized: firstLetter == firstLetter.toLocaleUpperCase()
    }
}

console.log(wordInfo('smth'))
console.log(wordInfo('Привет'))