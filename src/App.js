import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  Home from './components/Home';


import './custom.css'
import SchoolPage from './components/SchoolPage/SchoolPage.js';
import TestPage from './components/SchoolPage/TestPage.js';
export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/school-page/:id' component={SchoolPage} />
        <Route path="/test-page/" component={TestPage} /> 
      </Layout>
    );
  }
}
