import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {



    return (
     
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{margin:"0 auto"}}>
            <Link className="navbar-brand" to="/" style={{margin:"0 50px"}}>Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="navbar-brand" to="courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="inquiries">View Data</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="newinquiry">Inquiries</Link> 
                    </li>
                </ul>
            </div>
        </nav>
       

    );
}

export default Header;

