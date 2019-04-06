import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <div className="ui secondary poining menu">
       <Link to="/" className="item">
            Streamy
       </Link>
    <div className ="right menu">
        <Link to="/" className="item">
            All Streams
       </Link>
    </div>
    </div>)
}

export default Header;