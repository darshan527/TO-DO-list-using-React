import React from 'react'

class Item extends React.Component {

    constructor(props){
        super(props)
        this.state = {
                title : props.item.title,
                description : props.item.description
        }
        this.changeDesc = this.changeDesc.bind(this)
    }


    changeDesc = () => {
        console.log(this.state.description)
        this.setState({description: "changedit"})
    }

    render(){
        return (
            <div className="task" >
                    <h1>{this.state.title}</h1>
                    <h2>{this.state.description}</h2>
            </div>
        )
    }

}

export default Item