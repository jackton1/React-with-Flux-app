import React from 'react';
import SourceStore from "../../stores/SourceStore";

export default class SourceItem extends React.Component {

    constructor(props){
        super(props);
        // this.props.sortBysAvailable = this.props.sorts
    }

    render() {
        return (<option className="dropdown-header new-sources"
                        value={this.props.value}
                        onSelect={this.props.onclick}
                        onClick={this.props.onclick}>
                    {this.props.name}
               </option>)
    }
}
