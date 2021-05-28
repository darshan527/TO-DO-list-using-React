import React from 'react'
import AddItem from './AddItem'
import App from '../App'

export default class AddItemButton extends React.Component {

     constructor(){
        super()
        this.ad = this.ad.bind(this)
     }

    ad(){
        const t = prompt("Enter the title");
        const d = prompt("Enter the Description");
        App.renderTasks(<AddItem item={{title:t, description:d}} />)
    }

    render(){
        return (
            <div className="addItem">
                <button onClick={() => this.ad()}>Add Item</button>
            </div>
        )
    }
}