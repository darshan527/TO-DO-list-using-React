import React from 'react'
import Item from './components/Item'
import Header from './components/Header'
import AddItem from './components/AddItem'
import AddItemButton from './components/AddItemButton'
import Tasks from './TaskFiles'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            id : 0,
            itemsList : []
        }
        this.renderTasks = this.renderTasks.bind(this)
        this.ad = this.ad.bind(this)
    }


    renderTasks(itm){
        // for (const t in Tasks){
        //     this.state.itemsList.push(<Item item={{title:t.title, description: t.description}} />)
        //     console.log(t)
        // }
        let newList = this.state.itemsList.slice()
        newList.push(itm)
        this.setState((preState) => {
            return {
                id : preState.id + 1,
                itemsList : newList
            }
        })
        return this.state.itemsList
    }

    ad(){
        const t = prompt("Enter the title");
        const d = prompt("Enter the Description");
        this.renderTasks(<AddItem key={this.state.id} item={{title:t, description:d}} />)
    }

    render(){
        const tm = [
            <Item item={{title:"Testt1", description:"plz work"}} />,
            <Item item={{title:"Testt2", description:"work"}} />,
            <Item item={{title:"Testt3", description:" work"}} />,
            <Item item={{title:"Testt4", description:"lz work"}} />
        ]
        return (
            <div>
                <Header />
                {this.state.itemsList[0], console.log(this.state.itemsList)}
                {/* <Item item={{title:"Testt", description:"plz work"}} /> */}
                {tm}
                {console.log(tm)}
                <div className="addItem">
                    <button onClick={() => this.ad()}>Add Itemm</button>
                </div>
            </div>
        )
    }
}

export default App