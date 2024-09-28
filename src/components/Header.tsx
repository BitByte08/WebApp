import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Header.css';

const Header : React.FC = ()=>(
    <header className='header'>
        <div className='contents'>
            <h2><Link to='/category/Home' className='logo'>Hello</Link></h2>
            <h2>User</h2>
        </div>
    </header>
);
export default Header;