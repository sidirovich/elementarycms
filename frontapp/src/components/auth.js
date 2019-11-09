import React from 'react';


export class AuthForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            login: '',
            password: '',
        }

        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.HandlerInput = this.HandlerInput.bind(this);
    }

    SubmitHandler(){
        /*
        let response = fetch('/', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json());
        */
    }

    HandlerInput(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                        <h4>Authorization</h4>
                        <form>
                            <div className="form-group">
                                <label>Login</label>
                                <input className="form-control" name="login" onChange={this.HandlerInput} required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" name="password" onChange={this.HandlerInput} required/>
                            </div>
                            <button className="btn btn-dark mt-3" type="submit" >Send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}