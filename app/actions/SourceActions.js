import AppDispatcher from '../dispatcher/AppDispatcher.js';

import NewsConstants from '../constants/NewsConstants.js';
import NewsAPI from '../utils/NewsAPI.js';

export default {
  getSources(response) {
    AppDispatcher.handleViewAction({
      actionType: NewsConstants.GET_NEWS_ARTICLE,
      response
    });
  }

};