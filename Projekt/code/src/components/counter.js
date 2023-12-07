import React, {useState, useEffect} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(counter)
        const colorArray = ["aqua", "red", "green", "green", "yellow"]
        const idx = Math.floor(Math.random() * colorArray.length);
        document.body.style.background = colorArray[idx];
    }, [counter]);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div style={{display: "grid", placeContent: "center"}}>
            <h1 style={{textAlign: "center"}}>{counter}</h1>
            <button onClick={increment}>Up
            </button>
            <button onClick={decrement}>Down
            </button>
        </div>
    );
}

/*
onClick={() => {
    setCounter(counter - 1)
}}
*/

export default Counter;