
//
// Requiring the Dispatcher, Constants, and
// event emitter dependencies
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsDispatcher from '../dispatcher/NewsDispatcher'
import NewsConstants from '../constants/NewsConstants';
import ObjectAssign from 'object-assign';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

// Define the store as an empty array
const _store = {
  list: [],
  editing: false
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
const SourceStore = ObjectAssign( {}, EventEmitter.prototype, {

  addChangeListener(cb) {
    this.emit(CHANGE_EVENT, cb);
  },

  getAll(){
       return _store.list;
  },

    removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getList() {
    return _store;
  }

});

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
NewsDispatcher.register(payload => {

  const action = payload.action;
  const source = payload.source;

    switch (action.actionType){
        case NewsConstants.GET_SOURCE:
            console.log(action.response);
            _store.list.push(action.response);
            SourceStore.emit(CHANGE_EVENT);
            break;

        case NewsConstants.GET_SOURCE_RESPONSE:
            console.log(action.response);
            _store.push(action.response);
            SourceStore.emit(CHANGE_EVENT);
            break;

        default:
            return true;

    }
});

export default SourceStore;