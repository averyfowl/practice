import {useState} from 'react'

export default function Counter(){

    const [count, setCount] = useState(0);

    const countUp = () => setCount(prevCount => prevCount +1);
    const countDown = () => setCount(prevCount => prevCount - 1);


    return (
        <>
        <div className = "counting">
            <h1 >Current Count: {count} </h1>
            </div>
            <div className = "btns">
            <button className = "btn1" onClick={countUp}>+</button>
            <button className = "btn2" onClick = {countDown}> - </button>
            </div>
        </>
    );
}