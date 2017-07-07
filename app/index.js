import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/layout.js';
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";
import './stylesheets/style.css'
import Login from "./login";

ReactDOM.render(
    <Login/>
    , document.getElementById('app')
);