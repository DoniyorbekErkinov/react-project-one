import React, { useContext } from 'react';
import {Link} from "react-router-dom"
import MyButton from '../../components/MyButtons/MyButton';
import { AuthContext } from '../../context';
import './Navbar.css'
function Navbar() {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    function logout() {
        localStorage.setItem('user', {})
        setIsAuth(false)
    }
    return (
        <>
            <div className='main'>
                <Link to="/">
                    <button className='btn btn-primary'>
                        Logo
                    </button>
                </Link>
                <ul>
                    <Link to="/">Posts</Link>
                    <Link to="/videos">Videos</Link>
                    <li>
                        <MyButton className="btn btn-outline-primary" onClick={logout}>Logout</MyButton>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
