const data = [
    {
        title: 'Half-Life',
        genre: 'action',
        rank: 'R',
        year: 1998
    },
    {
        title: 'Quake 3 Arena',
        genre: 'action',
        rank: 'R',
        year: 1999
    },
    {
        title: 'Space Rangers',
        genre: 'rpg, tbs, space simulator',
        year: 2002
    },
]

function fillItem(node, itemData) {
    for(let i = 0; i < node.children.length; i++) {
        let child = node.children.item(i)
        let propName = child.dataset['field']
        let propVal = itemData[propName]

        if (propVal) {
            child.textContent = propVal
        } else {
            throw Error(`Object hasn\'t a property '${propName}'`)
        }
    }
}

const list = document.querySelectorAll('#item-list > .item')
for(let i = 0; i < list.length; i++) {
    fillItem(list[i], data[i])
}