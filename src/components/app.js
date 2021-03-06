import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navigation_bar';
import Intro from './intro';
import WhatIDo from './what_i_do';
import AboutMe from './about_me';
import MyWorks from './my_works';
import TechnologyStack from './technology_stack';
import OtherInterests from './other_interests';
import GetInTouch from './get_in_touch';


export default class App extends React.Component {
  render(){
    return (
      <div className='portfolio-app'>
          <NavigationBar/>
          <Intro/>
          <WhatIDo/>
          <AboutMe/>
          <MyWorks/>
          <TechnologyStack/>
          <OtherInterests/>
          <GetInTouch/>
      </div>
    )
  }
}
