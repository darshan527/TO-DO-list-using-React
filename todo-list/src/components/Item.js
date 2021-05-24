import React from 'react'

function Item(props) {
    return (
        <div className="item">
            <div className="status">
                <input type="checkbox"/>
            </div>
            <div className="task">
                <h1>{props.item.title}</h1>
                <h2>{props.item.description}</h2>
            </div>
        </div>
    )
}

export default Item