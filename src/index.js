import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {Header} from './component/header';
import {List} from './component/list';
import {Force} from './component/force';
import {Power} from './component/power';
import {SidebarExample} from './component/sidebar';




class Home extends React.Component {

  render(){

    return (
      <div className="col-xs-12">
      <Header/>
      <div className="row">
      <div className="col-sm-4">
      <List/>
      </div>
      <div className="col-sm-6">
      <Force/>
      <Power/>

      </div>
      </div>
      <div className="col-xs-12">
      <SidebarExample/>
      </div>
      </div>



    );
  }
}




ReactDOM.render(<Home/>,document.getElementById('app'));
