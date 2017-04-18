import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/layout.js';
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";
import styles from './stylesheets/style.css'

ReactDOM.render(
    <Header headers="Latest News"/>,
    document.getElementById('news-header')
);

ReactDOM.render(
    <Layout />
    , document.getElementById('app')
);

ReactDOM.render(
    <Footer/>,
    document.getElementById('news-footer')
);

var listClick = function () {
    let $ul = $(this).children('ul');
    if($ul.is(':visible')){
        $ul.css({display: 'none'})
    }else{
        $ul.css({display: 'block'})
    }
};

document.getElementById('dropdown').addEventListener('click', listClick);
