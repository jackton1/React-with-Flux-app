
//
// Requiring the Dispatcher, Constants, and
// event emitter dependencies
import AppDispatcher from '../dispatcher/AppDispatcher';

import NewsConstants from '../constants/NewsConstants';
import ObjectAssign from 'object-assign';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

const _store = {
  list: [],
  editing: false
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
const NewsStore = ObjectAssign( {}, EventEmitter.prototype, {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },


  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getAll(){
    return _store.list;
  },

  getList() {
    return _store;
  }

});

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register(payload => {
    // console.log(payload);
    // return true;
  const action = payload.action;

  switch (action.actionType){
      case NewsConstants.GET_NEWS:
          console.log(action.response);
          _store.list.push(action.response);
          NewsStore.emit(CHANGE_EVENT);
          break;

      case NewsConstants.GET_NEWS_RESPONSE:
          console.log(action.response);
          _store.push(action.response);
          NewsStore.emit(CHANGE_EVENT);
          break;

      default:
        return true;

  }

});

export default NewsStore;