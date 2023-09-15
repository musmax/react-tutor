import { ChangeProfile } from './ChangeProfile';
export const Profile = (props) => {
    return (
        <div>
            Hello user with name {props.username}
            <ChangeProfile setusername = {props.setusername}/>
        </div>
    )
}