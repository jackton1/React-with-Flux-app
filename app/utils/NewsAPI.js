import NewsServerActions from '../actions/NewsServerAction.js';
import NewsActions from '../actions/NewsActions.js';
import SourceServerActions from '../actions/SourceServerAction.js';
import request from 'superagent';
import apikey  from './config.js';

export function getNewsSources(){
    request.get('https://newsapi.org/v1/sources')
      .set({Accept : 'application/json', lang: 'en'})
      .on('error', errorHandler)
      .end((err, response) => {
        if (err) console.error(err);
        if(response) NewsActions.getNewsSources(response.body);
      });
}


let errorHandler = function (err) {
    console.error(err);
};


export function getNewsArticle(source, sortBy) {
    request.get('https://newsapi.org/v1/articles')
        .set('X-Api-Key', apikey.apikey)
        .query({source: source, sortBy: sortBy})
        .end((err, response) => {
            if (err) console.error(err);
            if(response) NewsActions.getNewsArticles(response.body)
        });
}

