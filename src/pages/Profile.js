import { ChangeProfile } from "./ChangeProfile"
import {AppContext} from "../App"
import { useContext } from "react"


export const UserProfile = () => {
    const {userName, setUserName} = useContext(AppContext);
    return (
        <div>
            <h1 className="text-center">User Profile</h1>
            <p>Hello user, your default name is {userName}</p>
            <ChangeProfile setUserName = {setUserName} />
        </div>
    )
}