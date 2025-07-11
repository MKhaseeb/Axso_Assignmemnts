import React from 'react'
import { useState } from 'react'

let nextId = 0;

const HomeComponent = () =>{
const [todo , setTodo] = useState('')
const [task, setTask] = useState([])


const addTask = () =>{
    setTask([
        ...task,
        {id: nextId++, todo : todo, complete: false}
    ])
    setTodo('')

}

const taskComp = (id) => {
    setTask(task.map(task =>
        task.id === id ? { ...task, complete: !task.complete } : task
    ))


}
const deleteTask =(id)=>{
    setTask(
        task.filter(e =>
            e.id !== id
        ))}

    return(
        <>
        <input type="text" 
            value={todo}
            onChange={e => setTodo(e.target.value)}
        />
        
        <button
        onClick={addTask}
        >
            Add Task
        </button>
        <ul>
            {task.map(task => (
                <li key={task.id} >
                    <label style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>
                        <input
                            type="checkbox"
                            checked={task.complete}
                            onChange={() => taskComp(task.id)}
                        />
                        {task.todo}
                    </label>
                <button onClick={() => deleteTask(task.id)}>delete</button>
                
                </li>
            ))}
                
        </ul>
        </>
    )
}

export default HomeComponent