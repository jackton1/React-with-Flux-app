import React from 'react';
import LeftSide from './leftSide';
import RightSide from './rightSide';
import Header from './header';
import Footer from './footer';
import RefreshSource from "./refresh";


export default class Layout extends React.Component {
  render() { 
    return (
      <div>
          < Header/>
  	      <div>
  	        	<LeftSide/> <RefreshSource />
  	      </div>
          <div>
              <RightSide />
          </div>
          < Footer/>
      </div>
    );
  }
}