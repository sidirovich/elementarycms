import React from 'react';
import { thisExpression } from 'babel-types';

function FalseAlert(props){

    switch (props.switcher) {
        case 1:
            return (
                <div class="alert alert-success" role="alert">
                     Save data is success
                </div>
                );
        break;
        case 2:
            return (
                <div class="alert alert-danger" role="alert">
                        Save return error
                </div>
                );
        break;
        default:
            return null;
        break;
    }
}

export class SettingsEditor extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            repeatpassword: '',
            handleralert: 1,
        }

        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.HandlerInput = this.HandlerInput.bind(this);
    }

    SubmitHandler(event){
        event.preventDefault();

        let response = fetch('http://localhost:3001/updateuser', {
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

    HandlerInput(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    HandlerAlert(e){
        this.setState({
            handleralert: e,
        });
    }

    render(){
        let ElementEditorJSX;
        switch (this.props.switcher) {
            case true:
                ElementEditorJSX =(
                <div className="backgound-popup">
                    <div className="content-popup">
                        <h4>Settings</h4>
                        <hr />
                        <FalseAlert switcher={this.state.handleralert}/>
                        <form onSubmit={this.SubmitHandler}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" onChange={this.HandlerInput} />
                                <small className="form-text text-muted"></small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" onChange={this.HandlerInput} />
                                <small className="form-text text-muted"></small>
                            </div>
                            <div className="form-group">
                                <label>Repeat password</label>
                                <input type="password" className="form-control" name="repeatpassword" onChange={this.HandlerInput} />
                                <small className="form-text text-muted"></small>
                            </div>
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button type="submit" className="btn btn-primary" onClick={ () => {this.props.viewFunction(false)} } >Close</button>
                        </form>
                    </div>
                </div>
                );
            break;
        
            default:
                return null
            break;
        }
        return ElementEditorJSX;
    }
}