import React from 'react';
import Title from './Header/title';
import NavBar from "./Header/nav";

export default class Header extends React.Component {
  render() {
    return (
            <header>
                <NavBar user={this.props.user}/>
                <Title headers={this.props.headers}/>
            </header>
    );
  }
}