import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TOKEN_NAME } from '../../services/apiService';
import './headerAdmin.css';

export default function HeaderAdmin() {
  const nav = useNavigate();


  const onLogOut = () => {
    // מחיקת טוקן
    if (window.confirm("Are you sure you want to logout ?")) {
      localStorage.removeItem(TOKEN_NAME)
      // להעביר לעמוד לוג אין
      nav("/admin")
    }
  }
  return (
    <header className='container-fluid'>
      <div className='container'>
        <div>
          LOGO
        </div>
        <nav>{localStorage[TOKEN_NAME] ?
          <ul className='nav'>
            <li>
              <Link to="/admin/users">Users</Link>
            </li>
            <li>
              <Link to="/admin/clients">Clients</Link>
            </li>
            <li>
              <Link to="/admin/proffesionals">Proffesionals</Link>
            </li>
            <li>
              <Link to="/admin/events">Events</Link>
            </li>
          </ul> : <ul></ul>}
          <div>
            {localStorage[TOKEN_NAME] ? <button className='btn btn-danger' onClick={() => onLogOut()}>Log out</button> : <Link to="/admin" className='btn btn-dark'>Log in page</Link>}
          </div>
        </nav>
      </div>
    </header>

  )
}
