import React from 'react';
import SourceStore from '../../stores/SourceStore';
import NewsActions from '../../actions/SourceActions';

export default class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = this.getItemsState();
        // this._onChange = this._onChange.bind(this)
    }

	getItemsState() {
	  return {
	  	sources:SourceStore.getAll(),
	    visibility:false,
	  };
   }
   //  _onChange (){
   //      this.setState(RightSide.getItemsState());
   //  }
   //
   // componentDidMount (){
	//    SourceStore.addChangeListener(this._onChange);
   // }
   //
   // componentWillUnMount (){
   //       SourceStore.removeChangeListener(this._onChange);
   // }

	render(){

		return (
			<div onLoad = {NewsActions.getSources()}>
      			<h1>This is the left side bar for news source</h1>
      		</div>
			);
	}
}

