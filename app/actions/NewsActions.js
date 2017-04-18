import AppDispatcher from '../dispatcher/AppDispatcher.js';

import NewsConstants from '../constants/NewsConstants.js';
import NewsAPI from '../utils/NewsAPI.js';

export default {
  getNewsSources(response) {
    AppDispatcher.handleViewAction({
      actionType: NewsConstants.GET_NEWS_SOURCES,
      response
    });
  },

  getNewsArticles(response){
      AppDispatcher.handleViewAction({
         actionType: NewsConstants.GET_NEWS_ARTICLE,
          response
      });
    }

};