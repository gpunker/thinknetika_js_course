// 3. Калькулятор
// 
// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат, 
// по умолчанию должны присутствовать методы add, substract
// 
// Пример: 
// const calculator = new Calc()
// 
// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5
// 
// Также, он должен хранить историю всех операций и выводить ее по запросу:
//  
// calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*', 
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */
//  
// И очищать историю
// calculator.clearHistory()
// calculator.history() // []

function Calc() {
    let history = []
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }

    function addHistory(operation, ...operands) {
        history.push({ operation: operation, operands: operands })
    }
  
    return {
      operation: (expression) => {
        const tokenized = expression.split("").filter((i) => i != ' ')
        const a = parseInt(tokenized[0])
        const b = parseInt(tokenized[2])
        const operation = tokenized[1]

        addHistory(operation, a, b)

        try {
            return operations[operation](a, b)
        } catch (error) {
            return 'Error! Некоректное выражение'
        }
      },
      addOperation: (operation, func) => {
        operations[operation] = func
      },
      history: () => history,
      clearHistory: () => {
        history = []
        return
      }
    }
  }
  
  const calculator = new Calc()
  console.log(calculator)
  console.log(calculator.operation('1 + 2'))
  console.log(calculator.history())
  calculator.addOperation('*', (a, b) => a * b)
  console.log(calculator.operation('2*2'))
  console.log(calculator.operation('*22'))
  console.log(calculator.history())
  calculator.clearHistory()
  console.log(calculator.history())
