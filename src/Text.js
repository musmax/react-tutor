import React from "react"
import {useState} from "react"

export const Text = () =>
 {
    const [input, setInput] = useState("");
    // function to handle input
    const handleChange=(e)=>{
        setInput(e.target.value);
    }
    return (
    <div>
        <input onChange={handleChange} />
        <h2>{input}</h2>
    </div>
    )
}