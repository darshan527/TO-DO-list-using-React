import React from 'react'
import Item from './components/Item'

function App(){
    return (
        <div>
            <Item item={{title:"React Project", description:"Complete todo app"}} />
        </div>
    )
}

export default App