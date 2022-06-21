function reverseWord(word) {
    let reversed = ''

    for(let i = word.length - 1; i >= 0; i--) {
        reversed += word[i]
    }

    return reversed
}

console.log('Реверсией слова "привет" будет "' + reverseWord('привет') +'"')