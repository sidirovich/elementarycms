import React from 'react';

import {ElementEditor} from './contentcomponents/ElementEditor';
import {ElementGenerator} from './contentcomponents/ElementGenerator';
import {SettingsEditor} from './contentcomponents/SettingsEditor';

class PersonalHeader extends React.Component{
    render(){
        return (
            <div className="row mb-5 justify-content-center">
                <div className="col-3 t-c">
                    <p><b>Site page</b></p>
                </div>
                <div className="col-3 t-c">
                    <p onClick={ () => {this.props.switcher(true)} }><b>Settings</b></p>
                </div>
                <div className="col-3 t-c">
                    <p><b>Log out</b></p>
                </div>
            </div>
        );
    }
}

export class ContentEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            elements: [],
            openElementForm: false,
            openSettingsForm: false,
        }
        this.ElementFormHandler = this.ElementFormHandler.bind(this);
        this.SettingsFormHandler = this.SettingsFormHandler.bind(this);

        this.RefreshAPI = this.RefreshAPI.bind(this);
        this.EditAPI = this.EditAPI.bind(this);
        this.CloneAPI = this.CloneAPI.bind(this);
        this.DeleteAPI = this.DeleteAPI.bind(this);
    }

    componentDidMount(){
        let response = fetch('http://localhost:3001/elements/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => {
            response.json().then( data => {
                this.setState({
                    elements: data,
                });
            });
        });
    }

    ElementFormHandler(option){
        this.setState({
            openElementForm: option,
        });
    }
    
    SettingsFormHandler(option){
        this.setState({
            openSettingsForm: option,
        });
    }

    RefreshAPI(){
        let response = fetch('http://localhost:3001/elements/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => {
            response.json().then( data => {
                this.setState({
                    elements: data,
                });
            });
        });
    }


    EditAPI(id){
        alert('Edit: ' + id);
        this.RefreshAPI();
    }

    CloneAPI(id){
        let response = fetch('http://localhost:3001/element/123/' + id, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            response.text().then( data => {
                alert('Delete: ' + data);
            });
        });
        this.RefreshAPI();
    }

    DeleteAPI(id){
        let response = fetch('http://localhost:3001/element/key123/' + id, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            response.text().then( data => {
                this.RefreshAPI();
            });
        });
    }

    render(){
        return (
            <React.Fragment>
                <ElementEditor switcher={this.state.openElementForm} viewFunction={this.ElementFormHandler} funcRefresh={this.RefreshAPI}/>
                <SettingsEditor switcher={this.state.openSettingsForm} viewFunction={this.SettingsFormHandler}/>
                <div className="container mt-2">
                    <PersonalHeader switcher={this.SettingsFormHandler}/>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                            <div className="row">
                                <div className="col-6 t-l">
                                    <h4>Content Editor</h4>
                                </div>
                                <div className="col-6 t-r pb-2">
                                    <button className="btn btn-dark mr-1" type="button" onClick={this.SaveElements}>Save</button>
                                    <button className="btn btn-dark mr-1" type="button" onClick={() => {this.ElementFormHandler(true)}}>New</button>
                                    <button className="btn btn-dark mr-1" type="button" onClick={() => {this.RefreshAPI()}}>Refresh</button>
                                </div>
                            </div>
                            <ElementGenerator 
                            Elements = {this.state.elements}
                            funcEdit = {this.EditAPI}
                            funcClone = {this.CloneAPI}
                            funcDelete = {this.DeleteAPI}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}