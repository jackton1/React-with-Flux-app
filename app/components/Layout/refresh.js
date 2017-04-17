import React from 'react';
import SourceStore from '../../stores/SourceStore';
import NewsActions from '../../actions/SourceActions';

export default class RefreshSource extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this._onChange.bind(this)
    }

    getItemsState() {
        return {
            sources:SourceStore.getAll(),
        };
    }
    onClick (){
        this.setState(this.getItemsState());
    }

    render(){

        return (
            <button type="button" onClick={this.onClick()}>
                <span className="glyphicon glyphicon-refresh" aria-hidden="true" />
            </button>
        );
    }
}

