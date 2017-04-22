//
// Requiring the Dispatcher, Constants, and
// event emitter dependencies

import NewsConstants from '../constants/NewsConstants';
import ObjectAssign from 'object-assign';
import {EventEmitter} from 'events';
import EventConstants from '../constants/EventConstants.js'
import AppDispatcher from "../dispatcher/AppDispatcher.js";

const _articles = {
  list: [], source: '', sortBy: ''
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

  getSource(){
    return _articles.source;
  },

  getSortBy(){
      return _articles.sortBy;
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
            if (_articles.list.length > 0) _articles.list = [];
            _articles.list.push(action.response.articles);
            _articles.source = action.response.source;
            _articles.sortBy = action.response.sortBy;
            NewsStore.emit(EventConstants.CHANGE_EVENT);
            break;
        default:
            return true;
    }

});


export default NewsStore;