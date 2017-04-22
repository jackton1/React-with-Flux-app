import React from 'react';
import * as NewsAPI from "../../utils/NewsAPI";
import SourceStore from '../../stores/SourceStore';

import NewsActions from '../../actions/SourceActions';
import ListItem from "./source-items";

export default class LeftSideBar extends React.Component {
	constructor(props){
        super(props);
        this.state = {sources: SourceStore.getAll()};
		this._onLoad = this._onLoad.bind(this);
		this._onChange = this._onChange.bind(this);
	}
    _onLoad (){
        this.setState(SourceStore.getAll());
    }

    _onChange(event) {
        let sources = this.state.sources[0];
        let prop = 0;
        for (;prop < sources.length; prop++){
            if (sources[prop].id === event.target.value){
                this.sourceId = sources[prop].id;
                this.sortBysAvailable = sources[prop].sortBysAvailable;
                if(this.sortBysAvailable.length > 0){
                    this.sortBysAvailable = this.sortBysAvailable[
                        Math.floor(Math.random() * this.sortBysAvailable.length)]
                } else{
                    this.sortBysAvailable = undefined
                }
                NewsAPI.getNewsArticle(this.sourceId, this.sortBysAvailable)
            }
        }

    }

   componentDidMount(){
	   SourceStore.addChangeListener(this._onLoad);
       NewsAPI.getNewsSources();
   }

   componentWillUnmount (){
         SourceStore.removeChangeListener(this._onLoad);
   }

	render (){
   	    let rows = [];
        if(this.state.sources[0]) {
            this.state.sources[0].map(function(item, index) {
                rows.push(<ListItem key={index} index={index} item={item} />)
            });
        }
		return (
		    <div className="col-lg-12 pull-left" onLoad={this._onLoad}>
                    <select onChange={this._onChange}>
                        <option selected disabled hidden>'cnn'</option>
                        {rows}
                    </select>
            </div>
			);
	}
}

