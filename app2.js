const input = document.querySelector('input[type=text]')
const resultBlock = document.querySelector('.result')

const numberPanel = document.querySelector('.numbers')
const actionPanel = document.querySelector('.actions')

let inputedValue = null
let lastAction = null
let lastResultValue = null

function fillInputByClick(event) {
    if (event.target.className !== 'numbers') {
        input.value += event.target.textContent
    }
}

function fillInputByKeyboard(event) {
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(event.key))) {
        input.value += event.key
    }
}

function removeChar(event) {
    if (event.key === 'Backspace') {
        let inputValue = input.value
        input.value = inputValue.slice(0, inputValue.length - 1)
    }
}

function pressAction(event) {
    if (event.target.className === 'actions') {
        return
    }
    
    switch(event.target.textContent) {
        case '+':
        case '-':
        case '*':
        case '/':
            lastResultValue = input.value
            lastAction = event.target.textContent
            input.value = ''
            break
        case '=':
            resultBlock.textContent = eval(`${lastResultValue}${lastAction}${parseInt(input.value)}`)
            lastAction = null
            input.value = ''
            break
        default:
            break
    }
}

numberPanel.addEventListener('click', fillInputByClick)
document.addEventListener('keypress', fillInputByKeyboard)
document.addEventListener('keydown', removeChar)

actionPanel.addEventListener('click', pressAction)
