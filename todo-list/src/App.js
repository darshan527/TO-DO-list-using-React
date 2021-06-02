import React, {useEffect, useState} from 'react'

function App(){
    // const [tasksList, setTask] = useState([])
    const [count, setCount] = useState(0)

    // setCount(count + 1)
    // setCount(){
    //     count.setState(prevState => {
    //         count = prevState + 1
    //     })
    //     console.log(count)
    // }

    // setTask(Event, setCount){
    //     setCount()
    // }
    // const [count, setCount] = useState(0);

    // return (
    //   <div>
    //     <p>You clicked {count} times</p>
    //     <button onClick={() => setCount(count + 1)}>
    //         Click me
    //        </button>
    //      </div>
    //    );

    function incrementCount() {
        setCount(c => c + 1)
    }

    // useEffect(() => {console.log(count)},[count])
    return (
        <div>
            <h1>Hello World</h1>
            <p>{count}</p>
            <button onClick={incrementCount}>Click thiss</button>
        </div>
    )
}

export default App