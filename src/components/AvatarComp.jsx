import {Link} from 'react-router-dom'

export default function AvatarComp() {
    return (
        <Link to={'/'}>
            <img className="avatar" src="./images/rencorsito-logo.svg" alt="logo rencorsito"/>
        </Link>
    )
}