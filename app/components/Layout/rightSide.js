import React from 'react';
import NewsStore from '../../stores/NewsStore';
import NewsActions from '../../actions/NewsActions';
import * as NewsAPI from "../../utils/NewsAPI";

export default class RightSide extends React.Component {
    constructor(props){
        super(props);
        this.state = this.getItemsState();
        // this._onChange = this._onChange.bind(this)
    }

    getItemsState() {
         return {
            news: NewsStore.getAll(),
         };
    }
    // _onChange (){
    //   this.setState(this.getItemsState());
    //  }
  
    // componentDidMount(){
    //
    //     NewsStore.addChangeListener(this._onChange);
    // }
    //
    // componentWillUnmount(){
    //     NewsStore.removeChangeListener(this._onChange);
    // }

    render(){
        return (
             <div onLoad={NewsAPI.getNewsApi()}>
                  <h1>This is the Right side for news Result</h1>
             </div>
      );
    }

}