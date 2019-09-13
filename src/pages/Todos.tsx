import React, { ChangeEvent, SyntheticEvent } from 'react'
import styled from 'styled-components';

interface Todo {
    title: string;
    author: string;
    completed: boolean;
    id: string;
}

const TodoStyles = styled.li`
    list-style-type: none;
`

function generateId () {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const Todos: React.FC = () => {
    const [todos, setTodos] = React.useState<Array<Todo>>([])
    const [input, setInput] = React.useState<string>('')

    const handleSubmit = () => {
        setTodos( (todos) => todos.concat({
            title: input,
            author: 'me',
            completed: false,
            id: generateId()
        }))
    }

    const handleRemove = (idToRemove: string) => {
        setTodos( (todos) => todos.filter(todo => todo.id !== idToRemove))
    }

    const handleCheckboxChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log('[matt][tealium] e.target.value', event.target.value)
        console.log('[matt][tealium] todos', todos)
        setTodos((todos) => todos.map(todo => {
            return todo
        }))
    }

    return (
        <div>
            <h1>This is my Todos page</h1>
            <input 
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='New Todo'
            />
            <button onClick={handleSubmit}>Submit</button>

            <ul>
                {todos.map((todoItem:Todo) => {
                    return (
                        <TodoStyles key={todoItem.id}>
                            <div>
                                <input
                                    type="checkbox"
                                    value={todoItem.id}
                                    checked={todoItem.completed || false}
                                    onChange={handleCheckboxChange}
                                />
                                {todoItem.title}
                                <button onClick={() => handleRemove(todoItem.id)}>X</button>
                                <div>({todoItem.author})</div>
                            </div>
                        </TodoStyles>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todos