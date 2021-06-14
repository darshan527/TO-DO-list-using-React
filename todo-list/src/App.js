import React, { useEffect, useState} from 'react'
import Header from './components/Header'
import Item from './components/Item'

function App(){
    const [tasksList, setTask] = useState([])
    const [renderList, setRenderList] = useState([])

    function renderTasks(){
        var i = 0
        const rlst = tasksList.map(itm => {
            i++
            return <Item key={i} item={{title:[i], description:[itm]}} />
        })
        setRenderList(rlst)
    }

    useEffect(renderTasks, [tasksList])

    function addTask(){
        const task =  prompt("Enter the task")
        console.log(task)
        if (task !== null && task !== ""){
            setTask(prevTaskList => [
            ...prevTaskList,
            task
            ])
            console.log(tasksList)
        }
    }

    // function removeItem(){
    //     const id = prompt("enter the item number")
    //     var tmpList = [...tasksList]
    //     var indx = id-1
    //     if (indx !== -1) {
    //         tmpList.splice(indx,1)
    //         setTask(tmpList)
    //     }

    //     console.log(tasksList)
    //     // console.log(`tmp ${tmpList} index: ${indx} cnt ${count}`)
    // }

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