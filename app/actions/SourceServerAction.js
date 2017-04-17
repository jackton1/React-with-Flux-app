import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsConstants from '../constants/NewsConstants';

export default {
  receiveSourceResult(response) {
    AppDispatcher.handleServerAction({
      actionType: NewsConstants.GET_SOURCE_RESPONSE,
      response
    });
  },
};