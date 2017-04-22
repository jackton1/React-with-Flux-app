import  { Dispatcher }  from 'flux';
import ObjectAssign from 'object-assign';
import NewsConstants from "../constants/NewsConstants";

const AppDispatcher = ObjectAssign( new Dispatcher(), {
   handleViewAction: function (action) {
       this.dispatch({
           action: action
       })
   }
});


export default AppDispatcher;




