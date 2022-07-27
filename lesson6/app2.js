// Реализовать функцию для отображения на экране вложенных массивов.
function fill(rootElement, content) {
    if (Array.isArray(content)) {
        const list = document.createElement('ul')

        content.forEach(element => {
            fill(list, element)
        });

        rootElement.append(list)
    } else {
        const li = document.createElement('li')
        const text = document.createTextNode(content)
        li.append(text)
        rootElement.append(li)
    }
}


const data = [['item6', 'item7'], 'item1', 'item2', ['item3', ['item4', 'item5']]]

const root = document.querySelector('#content')
fill(root, data)
