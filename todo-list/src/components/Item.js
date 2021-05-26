import React from 'react'

class Item extends React.Component {

    constructor(props){
        super(props)
        this.state = {
                title : props.title,
                description : props.description
        }
    }

    render(){
        return (
            <div className="task">
                    <h1>{this.state.title}</h1>
                    <h2>{this.state.description}</h2>
            </div>
        )
    }

}

export default Item