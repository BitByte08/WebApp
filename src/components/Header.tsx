import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Header.css';

const Header : React.FC = ()=>(
    <header className='header'>
        <h2><Link to='/category/Home' >Hello</Link></h2>
        <h2>User</h2>
    </header>
);
export default Header;