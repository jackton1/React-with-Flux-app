import React from 'react';
import * as NewsAPI from "../../utils/NewsAPI";
import SourceStore from '../../stores/SourceStore';
import SourceItem from "./source-items";
import NewsStore from "../../stores/NewsStore";
import SortItem from "./sort-items";

export default class Options extends React.Component {
    constructor(props){
        super(props);
        let _props = SourceStore.getDefaultProps();
        this.state = {sources: SourceStore.getAll(),
                     defaultId: _props.defaultId,
                     sortBy: _props.sortBy,
                     sortBys: _props.sortBys};
        this._onLoad = this._onLoad.bind(this);
        this._sortByOnChange = this._sortByOnChange.bind(this);
	}
    _onLoad (){
        this.setState({sources: SourceStore.getAll()});
    }
    _onInput(event){
        let value = event.target.value;
        let sources = SourceStore.getAll()[0];
        for (let i=0; i < sources.length; i++){
            if (sources[i].name === value){
                let source = sources[i].id;
                let sortBys = sources[i].sortBysAvailable;
                this.setState({
                    defaultId: source,
                    sortBy: sortBys[0],
                    sortBys: sortBys});
                NewsAPI.getNewsArticle(source, sortBys[0]);
                break;
            }
        }
    }

    _sortByOnChange(event){
        let value = event.target.value;
        NewsAPI.getNewsArticle(this.state.defaultId, value)
    }

   componentWillMount(){
       NewsAPI.getNewsSources();
   }

   componentDidMount () {
       SourceStore.addChangeListener(this._onLoad);
       NewsAPI.getNewsArticle(this.state.defaultId,  this.state.sortBy);
   }
   componentWillUnmount (){
         SourceStore.removeChangeListener(this._onLoad);
   }

	render (){
   	    let sortBys = [];
        let rows = [];
        if(this.state.sources[0]){
            this.state.sources[0].map(function (item, index) {
                rows.push(<option key={index} value={item.name} accessKey={item.id}>{item.id}</option>)
            });
        }
        if(this.state.sortBys){
            this.state.sortBys.map(function (item, index) {
                sortBys.push(<SortItem key={index} value={item} name={item}/>)
            })
        }

		return (<div>
                    <div className="col-lg-5 pull-left">
                        <h3>Please Select News Source</h3>
                        <div className="input-group" >
                            <input type="text" list="source-search"
                                   className="form-control"
                                   defaultValue={"CNN"}
                                   placeholder="Search for sources"
                                   onInput={this._onInput.bind(this)}
                                   onChange={this._onInput.bind(this)}/>
                            <datalist id="source-search">
                                {rows}
                            </datalist>
                        </div>
                    </div>
                    <div className="col-lg-4 pull-right">
                        <h3> Sort By</h3>
                        <select className="col-lg-3 sort-bys"
                            defaultValue={this.state.sortBy}
                            onChange={this._sortByOnChange}
                            onClick={this._sortByOnChange}
                            >
                                {sortBys}
                        </select>
                    </div>
                </div>
                );
	    }
}

