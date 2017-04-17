import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsConstants from '../constants/NewsConstants';

export default {
  receiveNewsResult(response) {
    AppDispatcher.handleServerAction({
      actionType: NewsConstants.GET_NEWS_RESPONSE,
      response
    });
  },
};