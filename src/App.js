import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Header'
import AddSubsriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscribers';

class App extends Component {
  render() {
    return (
       <Fragment>
         
         <AddSubsriber/>
       </Fragment>
      // <Fragment>
      //   <Header
      //     headername="Subscribers" /><br />
      //   <ShowSubscriber />
      // </Fragment>


    );
  }
}

export default App;
