import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { TOKEN_NAME,MY_INFO,MY_PROINFO } from '../services/apiService';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';

function MyLogout() {
    const nav = useNavigate();


    const onLogOut = () => {
        // מחיקת טוקן
        if (window.confirm("Are you sure you want to logout ?")) {
            localStorage.removeItem(TOKEN_NAME)
            localStorage.removeItem(MY_INFO)
            localStorage.removeItem(MY_PROINFO)
            // להעביר לעמוד לוג אין
            nav("/")
        }
    }
    return (
        <div>
            {/* {localStorage[TOKEN_NAME] ? <button style={{ backgroundColor: 'rgb(134, 80, 80)', color: 'rgb(250, 210, 210)' }} onClick={() => onLogOut()}>Log out</button> : <Link to="/" style={{ color: 'rgb(134, 80, 80)' }}>Log in page</Link>} */}
            {localStorage[TOKEN_NAME] ?<MenuItem onClick={() => onLogOut()}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>: <Link to="/" style={{ color: 'rgb(134, 80, 80)' }}>Log in page</Link>}
        </div>

    )
}

export default MyLogout