function reverseWord(word) {
    let reversed = ''

    for(let i = word.length; i > 0; i--) {
        reversed += word[i - 1]
    }

    return reversed
}

console.log('Реверсией слова "привет" будет "' + reverseWord('привет') +'"')