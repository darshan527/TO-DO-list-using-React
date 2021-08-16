import React, { useState } from 'react'
import Header from './components/Header'
import Item from './components/Item'
import { nanoid } from 'nanoid'

function App() {
    const [tasksList, setTask] = useState([])

    function addTask() {
        const task = prompt("Enter the task")
        const desc = prompt("Enter the Description")

        const tmpItem = {
            id: nanoid(),
            title: task,
            description: desc
        }

        if (task !== null && task !== "") {
            setTask(prevTaskList => [
                ...prevTaskList,
                tmpItem
            ])
            // console.log(tasksList)
        }
    }

    function removeItem(itemId) {
        const newArray = tasksList.filter(item => item.id !== itemId)
        setTask(newArray)
        // console.log("After deleting", tasksList)
    }

    return (
        <div>
            <Header />
            {tasksList.map(itm => {
                return <Item key={itm.id} removeItem={removeItem} item={{ id: itm.id, title: itm.title, description: itm.description }} />
            })}
            <button onClick={addTask}>Click thiss</button>
        </div>
    )
}

export default App