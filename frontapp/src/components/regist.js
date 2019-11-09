import React from 'react';

export class RegistForm extends React.Component{
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
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                        <h4>Registration</h4>
                        <form onSubmit={this.SubmitHandler}>
                            
                            <div className="form-group">
                                <label>Login</label>
                                <input className="form-control" name="login" onChange={this.HandlerInput} required/>
                                <small className="form-text text-muted">We suggest blocking a personal alias.</small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" name="password" onChange={this.HandlerInput} required/>
                            </div>
                            <div className="form-group">
                                <label>Repeat Password</label>
                                <input className="form-control" name="password" onChange={this.HandlerInput} required/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" name="password" onChange={this.HandlerInput} required/>
                                <small className="form-text text-muted">If you want restore access to login.</small>
                            </div>

                            <button className="btn btn-dark mt-3" type="submit" >Send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}