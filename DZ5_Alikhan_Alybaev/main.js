const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const buttonDiv = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')
        
        deleteButton.setAttribute('class', 'delete_button')
        editButton.setAttribute('class', 'edit_button')
        buttonDiv.setAttribute('class', 'button_div')
        div.setAttribute('class', 'block_text')

        deleteButton.innerHTML = "Delete"
        editButton.innerHTML = "Edit"
        text.innerHTML = input.value

        deleteButton.onclick = () => {div.remove()}
        editButton.onclick = () => {
            let editBlock = prompt('Edit:', text.innerHTML).trim()
            if (editBlock === ""){
                return false
            }
            else{
                text.innerHTML = "Nothing here"
            }
            text.innerHTML = editBlock
        }
        

        buttonDiv.append(editButton, deleteButton)
        div.append(text, buttonDiv)
        todoList.prepend(div)
    }
    input.value = ''
}

createButton.onclick = () => createTodo()
input.addEventListener('keydown', e => (e.keyCode === 13) ? createTodo() : false)