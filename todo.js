let ul = document.querySelector('#list');
var li;

let addbtn = document.querySelector('#add')
addbtn.addEventListener('click', addtodos)

let removebtn = document.querySelector('#remove')
removebtn.addEventListener('click', removetodos);

let removeallbtn = document.querySelector('#removeAll')
removeallbtn.addEventListener('click', removeAll)



function removetodos() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])

        }

    }
}

function addtodos() {
    let input = document.querySelector('#input')
    let item = input.value
    let textnode = document.createTextNode(item)
    if (item == '') {
        alert('No todos added')
    } else {
        li = document.createElement('li')
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')

        let label = document.createElement('label')
        label.setAttribute('for', 'item')
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        li.className = 'visual'
        input.value = ''
    }
}

function removeAll() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0]) {
            ul.removeChild(li[index])
        }
    }

}