import  { Dispatcher }  from 'flux';
import ObjectAssign from 'object-assign';

let NewsDispatcher = ObjectAssign( new Dispatcher(), {
    handleViewAction: function (action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }
});


module.exports = NewsDispatcher;

