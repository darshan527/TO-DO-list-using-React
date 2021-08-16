import React from 'react'

const Item = (props) => {
    const task = props.item
    return (
        <div className="task" onClick={() => props.removeItem(task.id)} >
            <h1>{task.title}</h1>
            <h2>{task.description}</h2>
        </div>
    )
}
export default Item