import React from 'react';

function FalseAlert(props){
    if(props.switch){
        return (
            <div className="alert alert-danger" role="alert">
                No matches found.
            </div>
        );
    }
    else{
        return null;
    }
}

export class AuthForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            handleralert: false,
        }

        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.HandlerInput = this.HandlerInput.bind(this);
    }

    SubmitHandler(event){
        event.preventDefault();

        let response = fetch('http://localhost:3001/validuser', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => {
            response.json().then( data => {
                if(data){
                    this.props.handlerAuth(true);
                }
                else{
                    this.HandlerAlert(true);
                }
            });
        });
    }

    HandlerAlert(e){
        this.setState({
            handleralert: e,
        });
    }

    HandlerInput(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render(){
        let pages = 2;
        return (
            <div className="container">
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                        <h4>Authorization</h4>
                        <form onSubmit={this.SubmitHandler}>
                            <div className="form-group">
                                <label>Login</label>
                                <input className="form-control" name="email" onChange={this.HandlerInput} required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" name="password" onChange={this.HandlerInput} required/>
                            </div>
                            <FalseAlert switch={this.state.handleralert}/>
                            <button className="btn btn-dark mt-3" type="submit" >Send</button>
                        </form>
                        <p className="link mt-4" onClick={(pages) => {this.props.innerFunc(2)}}>Need enrolment</p>
                    </div>
                </div>
            </div>
        );
    }
}