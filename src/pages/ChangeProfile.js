import { useState } from "react"

export const ChangeProfile = (props) => {
    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
           <input onChange={(event) => {setNewUsername(event.target.value)}}/>
           <button onClick={() => {props.setusername(newUsername)}}>Change Username</button>
        </div>
    )
}