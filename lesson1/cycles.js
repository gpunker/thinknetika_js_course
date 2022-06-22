// цикл do..while
console.log('Цикл "do..while"')
var i = 1
do {
    if (i % 2 == 0) {
        console.log(i)
    }

    i++
} while(i <= 20)

// цикл while..do
console.log('Цикл "while..do"')
var i = 1
while(i <= 20) {
    if (i % 2 == 0) {
        console.log(i)
    }

    i++
}

// цикл for
console.log('Цикл "for"')
for(let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}