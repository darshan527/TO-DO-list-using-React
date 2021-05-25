import React from 'react'
import Item from './Item'
class AddItem extends React.Component {
    render() {
        return <Item item={{title:"addcheck", description:"Add check description"}} />
    }
}

export default AddItem