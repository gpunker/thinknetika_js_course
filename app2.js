class CalculatorView {
    constructor() {
        this._numberPanel.addEventListener('click', (e) => this.inputHandler(parseInt(e.target.textContent)))
        this._actionPanel.addEventListener('click', (e) => this.handleAction(e.target.textContent))
        this._addOperationForm.addEventListener('submit', (e) => this.addOperation(e))
        
        document.addEventListener('keypress', (e) => this.inputHandler(e.key))
        document.addEventListener('keydown', (e) => this.keydownHandler(e.key))
    }

    _calculator = new CalculatorEngine()
    _input = document.querySelector('#number-input')
    _numberPanel = document.querySelector('.numbers')
    _resultBlock = document.querySelector('.result')
    _actionPanel = document.querySelector('.actions')
    _addOperationForm = document.querySelector('#command-editor-form')

    inputHandler(key) {
        switch(key) {
            case 'C':
            case 'c':
                this.clear()
                break
            default: 
                if ([1,2,3,4,5,6,7,8,9,0].includes(parseInt(key)) && this.isBodyFocused()) {
                    this._input.value += key
                }
        }
    }

    keydownHandler(key) {
        switch(key) {
            case 'Backspace':
                if (this.isBodyFocused()) {
                    this._input.value = this._input.value.slice(0, this._input.value.length - 1)
                }
                break
            case 'Enter':
                this.handleAction('=')
        }
    }

    isBodyFocused() {
        return document.activeElement.tagName === 'BODY'
    }
    
    handleAction(key) {
        if (['c', 'C'].includes(key)) {
            this.inputHandler(key)
            return
        }

        let result = this._calculator.handleInput(parseInt(this._input.value), key)
        this._input.value = ''
        if (result !== undefined) this._resultBlock.textContent = result
    }

    clear() {
        this._calculator.clear()
        this._resultBlock.textContent = this._calculator.resultValue
        this._input.value = ''
    }

    addOperation(event) {
        event.preventDefault()
        let form = event.target

        let nameInput = form.querySelector('input[name=command-name]')
        let argumentsInput = form.querySelector('input[name=command-arguments]')
        let operationInput = form.querySelector('textarea[name=command-body]')

        let args = argumentsInput.value.split([',', ', ', ' , '])
        this._calculator.addOperation(nameInput.value, args[0], args[1], operationInput.value)
        
        let newOperationButton = document.createElement('div')
        newOperationButton.textContent = nameInput.value
        this._actionPanel.append(newOperationButton)

        nameInput.value = ''
        argumentsInput.value = ''
        operationInput.value = ''
    }
}

class CalculatorEngine {
    constructor() {}

    _inputedValue = null
    _currentOperand = null
    _resultValue = 0

    _operations = {
        '+': function(a, b) {
            return a + b
        },
        '-': function(a, b) {
            return a - b
        },
        '*': function(a, b) {
            return a * b
        },
        '/': function(a, b) {
            return a / b
        }
    }

    get operations() {
        return this._operations
    }

    get resultValue() {
        return this._resultValue
    }

    handleInput(value, operand) {
        if (this._currentOperand === null) {
            this._resultValue = value
            this._currentOperand = operand
        } else {
            this._inputedValue = value
            let result = this.perform()

            if (operand === '=') {
                this._currentOperand = null
                this._inputedValue = null
            } else {
                this._currentOperand = operand
            }
            
            return result
        }
    }

    perform() {
        this._resultValue = this._operations[this._currentOperand](this._resultValue, this._inputedValue)
        return this._resultValue
    }

    addOperation(name, argA, argB, fnBody) {
        if (this._operations[name] === undefined) {
            let func = Function(argA, argB, fnBody)
            this._operations[name] = func
        } else {
            alert('Такая операция уже существует')
        }
    }

    clear() {
        this._inputedValue = null
        this._currentOperand = null
        this._resultValue = 0
    }
}

function main() {
    new CalculatorView()
}

main()