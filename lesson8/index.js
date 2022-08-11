async function test(value) {
    await ((value) => {
        console.log(value + 1)
    })(value)
}

test(1)
    // .then(returned => console.log(returned + 1))

const pr = new Promise((resolve) => {})  
console.log(pr)