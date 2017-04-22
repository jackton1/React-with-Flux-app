import React from 'react';
import SourceStore from "../../../stores/SourceStore.js";
import *  as  NewsAPI from "../../../utils/NewsAPI.js";
import EventConstants from "../../../constants/EventConstants";

export default class Search extends React.Component {

    _addKeyUpListener(event){
        let sources = SourceStore.getAll()[0];
        let value = event.target.value;
        for (let i=0; i < sources.length; i++){
            if (sources[i].id.includes(value) || sources[i].name.includes(value)
                || sources[i].description.includes(value)){
                let source = sources[i].id;
                NewsAPI.getNewsArticle(source);
                SourceStore.emit(EventConstants.CHANGE_EVENT);
                break;
            }
        }
    }

    render(){
        return (

                <form className="navbar-form navbar-right">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search"
                         onKeyUp={this._addKeyUpListener.bind(this)}/>
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit">
                                <i className="glyphicon glyphicon-search"/>
                            </button>
                        </div>
                    </div>
                </form>
                )
    }
}