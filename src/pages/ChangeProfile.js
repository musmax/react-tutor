import { useState } from "react"
import {AppContext} from "../App"
import { useContext } from "react"

export const ChangeProfile = () => {
    const {setUserName} = useContext(AppContext);
    const [newUserName, setNewUserName] = useState("");
    return (
        <div>        
        <input onChange={(event) => {setNewUserName(event.target.value)}}/>
        <button onClick={setUserName(newUserName)}>Change profile name</button>
        </div>
    )
}