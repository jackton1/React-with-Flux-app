import AppDispatcher from '../dispatcher/AppDispatcher.js';

import NewsConstants from '../constants/NewsConstants.js';
import NewsAPI from '../utils/NewsAPI.js';

export default {
  getNews(response) {
    AppDispatcher.handleViewAction({
      actionType: NewsConstants.GET_NEWS,
      response
    });
    // NewsAPI.get();
  }

};