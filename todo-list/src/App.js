import React from 'react'
import Item from './components/Item'
import Header from './components/Header'
import AddItem from './components/AddItem'

function App(){
    return (
        <div>
            <Header />
            <Item item={{title:"React Project", description:"Complete todo app"}} />
            <Item item={{title:"React Project", description:"Complete todo app"}} />
            <Item item={{title:"React Project", description:"Complete todo app"}} />
            <Item item={{title:"React Project", description:"Complete todo app"}} />
        </div>
    )
}

export default App