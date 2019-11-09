import React from 'react';
import {
  BrowserRouter as Router,
  IndexRoute,
  Route,
  Link
} from "react-router-dom";

import {ContentEditor} from './components/contenteditor';
import {AuthForm} from './components/auth';
import {RegistForm} from './components/regist';


export class MainComponent extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          login: '',
          passwordOne: '',
          passwordTwo: '',
          email: '',
      }

  }
  render(){
      return (
        <React.Fragment>  
          <Router>
              <Route exact path="/" component={AuthForm} />
              <Route path="/content" component={ContentEditor} />
              <Route path="/regist" component={RegistForm} />
          </Router>
          <div className="container">
            <div className="row justify-content-center mt-2 mb-2">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                <small>Elementary CMS v0.0.1</small>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
  }
}