import React, { useEffect, useState} from 'react'
import Header from './components/Header'
import Item from './components/Item'

function App(){
    const [tasksList, setTask] = useState([])
    const [count , setCount] = useState(0)
    const [renderList, setRenderList] = useState([])

    function renderTasks(){
        // setCount(0)
        var i = 0
        const rlst = tasksList.map(itm => {
            // setCount(c => c + 1)
            i++
            return <Item key={i} item={{title:[i], description:[itm]}} />
        })
        // console.log(`rlst ${rlst}`)
        setRenderList(rlst)
    }

    useEffect(renderTasks, [count, tasksList])

    function addTask(){
        const task =  prompt("Enter the task")
        console.log(task)
        if (task !== null && task !== ""){
            setCount(c => c + 1) //not needed
            setTask(prevTaskList => [
            ...prevTaskList,
            task
            ])
            console.log(tasksList)
        }
    }

    function removeItem(){
        const id = prompt("enter the item number")
        var tmpList = [...tasksList]
        var indx = id-1
        if (indx !== -1) {
            setCount(c => c - 1)
            tmpList.splice(indx,1)
            setTask(tmpList)
            // renderTasks()
        }
        console.log(tasksList)
        // console.log(`tmp ${tmpList} index: ${indx} cnt ${count}`)
    }

    return (
        <div>
            <Header />
            {renderList}
            <button onClick={addTask}>Click thiss</button>
            <button onClick={removeItem}>Remove</button>
        </div>
    )
}

export default App