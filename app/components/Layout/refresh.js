import React from 'react';
import * as NewsAPI from "../../utils/NewsAPI";

// If you need the refresh button you can modify this
export default class RefreshSource extends React.Component {
    render (){
        return (
            <button type="button"
                    onClick={(event) => {NewsAPI.getNewsSources()}}>
                <span className="glyphicon glyphicon-refresh" aria-hidden="true" />
            </button>
        );
    }
}

