import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { TOKEN_NAME } from '../services/apiService';
function Logout() {
    const nav = useNavigate();


    const onLogOut = () => {
        // מחיקת טוקן
        if (window.confirm("Are you sure you want to logout ?")) {
            localStorage.removeItem(TOKEN_NAME)
            // להעביר לעמוד לוג אין
            nav("/")
        }
    }
    return (
        <div>
            {localStorage[TOKEN_NAME] ? <button style={{backgroundColor: 'rgb(134, 80, 80)',color: 'rgb(250, 210, 210)'}} onClick={() => onLogOut()}>Log out</button> : <Link to="/" style={{color: 'rgb(134, 80, 80)'}}>Log in page</Link>}
        </div>
    )
}

export default Logout