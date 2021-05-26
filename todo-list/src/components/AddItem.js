import React from 'react'
import Item from './Item'
class AddItem extends React.Component {
    show = false
    setShow(e){
        this.show = true
    }
    render() {
        <div className="addItem">
            <input type="button" onClick={e => this.setShow(e)}/>
        </div>
        return <Item item={{title:"addcheck", description:"Add check description"}} />
    }
}

export default AddItem