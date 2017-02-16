import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navigation_bar';
import Intro from './intro';


export default class App extends React.Component {
  render(){
    return (
      <div className='portfolio-app'>
          <NavigationBar/>
          <Intro/>
      </div>
    )
  }
}
