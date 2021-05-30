import React from 'react'
import Item from './Item'
class AddItem extends React.Component {
    // show = false
    // setShow(e){
    //     this.show = true
    // }
    constructor(props){
        super(props)
        this.state = {
            title : props.item.title,
            description : props.item.description
        }
    }


    createItem(){

    }

    render() {
        if (this.show){
            console.log("activveeeve")
            return (
                <Item item={{title:"addcheckeeeee", description:"Add check description"}} />
            )
        }
        else {
            return (
                <div className="addItem">
                    <input type="button" name="AddItem" onClick={e => this.setShow(e)}/>
                </div>
            )
        }
    }
}
function AddItem(){
    return (
        <Item item={{title:"addcheck", description:"Add check description"}} />
    )
}

export default AddItem