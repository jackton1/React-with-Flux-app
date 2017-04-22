import React from 'react';
import Search from './search.js';

export default class NavBar extends React.Component {

    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">News Feed App</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        {/*<li><a href="#">Setup</a></li>*/}
                    </ul>
                    <Search />
                    {/*<ul className="nav navbar-nav navbar-right">*/}
                        {/*<li><a href="#"><span className="glyphicon glyphicon-user"/> Sign Up</a></li>*/}
                        {/*<li><a href="#"><span className="glyphicon glyphicon-log-in"/> Login</a></li>*/}
                    {/*</ul>*/}
                </div>
            </nav>
        );
    }
}
