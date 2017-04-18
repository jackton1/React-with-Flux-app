import  { Dispatcher }  from 'flux';
import ObjectAssign from 'object-assign';

let AppDispatcher = ObjectAssign( new Dispatcher(), {
   handleViewAction: function (action) {
       this.dispatch({
           action: action
       })
   }
});


module.exports = AppDispatcher;

