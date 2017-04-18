import React from 'react';
import * as NewsAPI from "../../utils/NewsAPI";

export default class ListItem extends React.Component {
    constructor(props){
        super(props);
        this._onClick = this._onClick.bind(this)
    }

    _onClick(){
         if(this.props){
             this.sourceId = this.props.item.id;
             this.sortBysAvailable = this.props.item.sortBysAvailable;
             if(this.sortBysAvailable.length > 0){
                 this.sortBysAvailable = this.sortBysAvailable[
                     Math.floor(Math.random() * this.sortBysAvailable.length)]
             } else{
                 this.sortBysAvailable = undefined
             }
             NewsAPI.getNewsArticle(this.sourceId, this.sortBysAvailable)
         }
    }

    render() {
        return (<li className="dropdown-header"  title={this.props.item.description}>
                    <a href="#" onClick={this._onClick}> {this.props.item.name} </a>
               </li>)
    }
}
// {/*href={this.props.item.url}*/}
// {/*<li><a href={this.props.item.url}></a></li>*/}
