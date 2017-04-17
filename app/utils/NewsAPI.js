import NewsServerActions from '../actions/NewsServerAction.js';
import NewsActions from '../actions/NewsActions.js';
import SourceServerActions from '../actions/SourceServerAction.js';
import request from 'superagent';

export function getNewsApi(){
    request.get('https://newsapi.org/v1/sources')
      .set('Accept', 'application/json')
        // .form({})
      .end((err, response) => {
        if (err) return console.error(err);
        console.log(response.body);
        NewsActions.getNews(response.body);
      });
}


// export function getArticleEndpoint(){
//     request.get('httpms')
//
// }

//I want to get both the articles api and the sources api. I dont know how to do it.
