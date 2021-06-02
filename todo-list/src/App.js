import React, { useState} from 'react'
import Header from './components/Header'
import Item from './components/Item'

function App(){
    const [tasksList, setTask] = useState([])
    const [count , setCount] = useState(0)

    function addTask(){
        const task =  prompt("Enter the task")
        setCount(count + 1)
        setTask(prevTaskList => [
            ...prevTaskList,
            <Item key={count} item={{title:[count], description:[task]}} />
            ])
        console.log(tasksList)
    }

    function removeItem(){
        const id = prompt("enter the item number")
        var tmpList = [...tasksList]
        var indx = id // tmpList.indexOf(id)
        if (indx !== -1) {
            tmpList.splice(indx,1)
            setCount(c => 0)
            setTask(tm => tmpList)
        }
        // console.log(tasksList)
        console.log(`tmp ${tmpList} index: ${indx} cnt ${count}`)
    }

    return (
        <div>
            <Header />
            {tasksList}
            <button onClick={addTask}>Click thiss</button>
            <button onClick={removeItem}>Remove</button>
        </div>
    )
}

export default App