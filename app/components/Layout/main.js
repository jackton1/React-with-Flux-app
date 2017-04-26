import React from 'react';
import Header from "./header";
import Layout from "./layout";

export default class Main extends React.Component {

    render() {
        console.log(this.props.user)
        return (
            <div>
                <Header />
                <Layout />
            </div>
        );
    }

}