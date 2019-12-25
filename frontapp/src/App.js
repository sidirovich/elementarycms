import React from 'react';

import {ContentEditor} from './components/contenteditor';
import {AuthForm} from './components/auth';
import {RegistForm} from './components/regist';


function SwitcherComponent(props){
  
  switch (props.count) {
    case 1:
      return <AuthForm innerFunc={props.innerFunc} handlerAuth={props.innerAuth} />;
    break;
    case 2:
      return <RegistForm innerFunc={props.innerFunc} />;
    break;
    case 3:
      return <ContentEditor innerFunc={props.innerFunc} />;
    break;
    case 4:
      //return <Settings innerFunc={props.innerFunc} />;
    break;
    default:
      //404
    break;
  }

}

export class MainComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        authState: true,
        currentPage: 3,
    }
    this.HandlerAuth = this.HandlerAuth.bind(this);
    this.HandlerPage = this.HandlerPage.bind(this);
  }
  
  componentDidMount(){
    let answer = sessionStorage.getItem('auth');
    if (answer == 'true'){
      this.setState({
        currentPage: 3
      });
    }
  }

  HandlerAuth(count){
    sessionStorage.setItem('auth', true);
    this.setState({
      authState: count,
      currentPage: 3
    });
    console.log('State: ' + this.state.authState + '  Count: ' + count);
  }

  HandlerPage(count){
    this.setState({
      currentPage: count
    });
  }

  render(){
      return (
        <React.Fragment>
          <SwitcherComponent count={this.state.currentPage} auth={this.state.authState} innerFunc={this.HandlerPage} innerAuth={this.HandlerAuth}/>
          <div className="container">
            <div className="row justify-content-center mt-2 mb-2">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12 t-c mt-3">
                <small>Elementary CMS v0.0.1</small>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
  }
}