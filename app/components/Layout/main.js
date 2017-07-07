import React from 'react';
import Header from "./header";
import Layout from "./layout";
import Footer from "./footer";

export default class Main extends React.Component {

    render() {
        console.log(this.props.user);
        return (
            <div>
                <Header user={this.props.user}/>
                <Layout />
            </div>
        );
    }

}