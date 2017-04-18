import React from 'react';
import { render } from 'react';
import * as NewsAPI from "../../utils/NewsAPI";
import { TablePagination } from 'react-pagination-table';
import SourceStore from '../../stores/SourceStore';

import NewsActions from '../../actions/SourceActions';
import ListItem from "./source-items";

export default class LeftSideBar extends React.Component {
	constructor(props){
        super(props);
        this.state = {sources: SourceStore.getAll()};
		this._onChange = this._onChange.bind(this);
	}
    _onChange (){
        this.setState(SourceStore.getAll());
    }

   componentDidMount (){
       NewsAPI.getNewsSources();
	   SourceStore.addChangeListener(this._onChange);
   }

   componentWillUnmount (){
         SourceStore.removeChangeListener(this._onChange);
   }

	render (){
   	    const Header = "News Sources";
   	    let rows = [];
        if(this.state.sources[0]) {
            this.state.sources[0].map(function(item, index) {
                rows.push(<ListItem key={index} index={index} item={item} />)
            });
        }

		return (
		    <div className="col-lg-12 pull-left">
                <div className="dropdown" id="dropdown">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        { Header } <span className="caret"/>
                    </button>
                    <ul className="dropdown-menu scrollable-menu" role="menu" style={{minWidth: '200px',
                                                                                    maxHeight: '230px',
                                                                                    overflowX: 'hidden'}}>
                        {rows}
                    </ul>
                </div>

            </div>
			);
	}
}

