const input = document.querySelector('#number-input')
const resultBlock = document.querySelector('.result')

const numberPanel = document.querySelector('.numbers')
const actionPanel = document.querySelector('.actions')
const addOperationForm = document.querySelector('#command-editor-form')

let inputedValue = null
let currentOperand = null
let resultValue = 0
let customOperations = {}

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

function calcResultByEnter(event) {
    if (event.key === 'Enter') {
        equalTrigger()
    }
}

function performAction() {
    switch(currentOperand) {
        case '+':
            resultValue = resultValue + inputedValue
            break
        case '-':
            resultValue = resultValue - inputedValue
            break
        case '*':
            resultValue = resultValue * inputedValue
            break
        case '/':
            resultValue = resultValue / inputedValue
            break
        default:
            resultValue = customOperations[currentOperand](resultValue, inputedValue)
    }
}

function pressAction(event) {
    const operandButton = event.target

    if (operandButton.className === 'actions') {
        return
    }
    
    switch(operandButton.textContent) {
        case 'C':
            clear()
            break
        case '=':
            equalTrigger()
            break
        default:
            if (currentOperand === null) {
                resultValue = parseInt(input.value)
                currentOperand = operandButton.textContent
            } else {
                inputedValue = parseInt(input.value)
                performAction()
                currentOperand = operandButton.textContent
            }
            resultBlock.textContent = resultValue
            break
    }
    input.value = ''
}

function equalTrigger() {
    inputedValue = parseInt(input.value)
    performAction()
    clear()
}

function clearVariables() {
    inputedValue = null
    currentOperand = null
    resultValue = 0
}

function clear() {
    resultBlock.textContent = resultValue
    input.value = ''
    clearVariables()
}

function addCustomOperation(event) {
    event.preventDefault()
    let form = event.target

    let nameInput = form.querySelector('input[name=command-name]')
    let argumentsInput = form.querySelector('input[name=command-arguments]')
    let operationInput = form.querySelector('textarea[name=command-body]')

    if (customOperations[nameInput.value] === undefined) {
        let arguments = argumentsInput.value.split([',', ', ', ' , '])
        let fn = Function(arguments, operationInput.value)
        let newOperation = document.createElement('div')

        customOperations[nameInput.value] = fn
        newOperation.textContent = nameInput.value
        actionPanel.append(newOperation)
    } else {
        alert('Такая операция уже существует')
    }

    nameInput.value = ''
    argumentsInput.value = ''
    operationInput.value = ''
}

numberPanel.addEventListener('click', fillInputByClick)
document.addEventListener('keypress', fillInputByKeyboard)
document.addEventListener('keydown', removeChar)
document.addEventListener('keydown', calcResultByEnter)

actionPanel.addEventListener('click', pressAction)
addOperationForm.addEventListener('submit', addCustomOperation)
