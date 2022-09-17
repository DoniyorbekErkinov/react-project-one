import React from 'react';
import {Link} from "react-router-dom"
import MyButton from '../../components/MyButtons/MyButton';
import './Navbar.css'
function Navbar() {
    return (
        <>
            <div className='main'>
                <Link to="/posts">
                    <button className='btn btn-primary'>
                        Logo
                    </button>
                </Link>
                <ul>
                    <Link to="/posts">Posts</Link>
                    <Link to="/">Games</Link>
                    <li>
                        <MyButton className="btn btn-outline-primary">LogIn</MyButton>
                    </li>
                </ul>
            </div>   
        </>
    );
}

export default Navbar;