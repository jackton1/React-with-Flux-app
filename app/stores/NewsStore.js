
//
// Requiring the Dispatcher, Constants, and
// event emitter dependencies
import AppDispatcher from '../dispatcher/AppDispatcher';

import NewsConstants from '../constants/NewsConstants';
import ObjectAssign from 'object-assign';
import {EventEmitter} from 'events';
import EventConstants from '../constants/EventConstants.js'

const _articles = {
  list: []
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
const NewsStore = ObjectAssign( {}, EventEmitter.prototype, {

  addChangeListener(cb) {
    this.on(EventConstants.CHANGE_EVENT, cb);
  },

  addClickListener(cb){
      this.on(EventConstants.CLICK_EVENT, cb);
  },

  removeClickListener(cb){
        this.removeListener(EventConstants.CLICK_EVENT, cb);
  },


  removeChangeListener(cb) {
    this.removeListener(EventConstants.CHANGE_EVENT, cb);
  },

  getAll(){
    return _articles.list;
  },

  getList() {
    return _articles;
  }

});

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register(payload => {
  const action = payload.action;

  switch (action.actionType){
      case NewsConstants.GET_NEWS_ARTICLE:
          console.log(action.response);
          if (_articles.list.length > 0) _articles.list = [];
          _articles.list.push(action.response.articles);
          NewsStore.emit(EventConstants.CHANGE_EVENT);
          break;
      default:
        return true;
  }

});

export default NewsStore;