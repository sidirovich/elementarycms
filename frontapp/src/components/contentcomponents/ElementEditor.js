import React from 'react';

export class ElementEditor extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            parentInput: '',
            nameInput: '',
            aliasInput: '',
            typeInput: '',
            viewState: false,
            jsxState: false,
        };

        this.HandlerInput = this.HandlerInput.bind(this);
        this.SubmitHandler = this.SubmitHandler.bind(this);
    }
    
    /*
    componentDidMount(){
        if(this.props.switcher == true){
            if(this.props.switcherFunc == 'change'){
                this.getElement(this.props.id);
            }
            if(this.props.switcherFunc == 'new'){
                this.newElement();
            }
        }
    }
    */

    HandlerInput(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    SubmitHandler(e){
        e.preventDefault();
        let newElement = {
            parent: this.state.parentInput,
            name: this.state.nameInput,
            alias: this.state.aliasInput,
            type: this.state.typeInput,
        };
        let response = fetch('http://localhost:3001/element/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newElement)
        }).then(response => {
            response.text().then( data => {
                this.props.funcRefresh();
            });
        });

        this.setState({
            parentInput: '',
            nameInput: '',
            aliasInput: '',
            typeInput: '',
        });
    }

    render(){
        let ElementEditorJSX;
        switch (this.props.switcher) {
            case true:
                ElementEditorJSX =(
                <div className="backgound-popup">
                    <div className="content-popup">
                        <h4>Element Editor</h4>
                        <hr />
                        <form onSubmit={this.SubmitHandler}>
                            <div className="form-group">
                                <label>Name</label>
                                <input name="nameInput" className="form-control" onChange={this.HandlerInput} value={this.state.nameInput}/>
                                <small id="emailHelp" className="form-text text-muted"></small>
                            </div>
                            <div className="form-group">
                                <label>Parent</label>
                                <input name="parentInput" className="form-control" onChange={this.HandlerInput} value={this.state.parentInput}/>
                                <small id="emailHelp" className="form-text text-muted"></small>
                            </div>
                            <div className="form-group">
                                <label>Alias</label>
                                <input name="aliasInput" className="form-control" onChange={this.HandlerInput} value={this.state.aliasInput}/>
                                <small id="emailHelp" className="form-text text-muted"></small>
                            </div>
                            <div className="form-group">
                                <label>Type</label>
                                <input name="typeInput" className="form-control" onChange={this.HandlerInput} value={this.state.typeInput}/>
                                <small id="emailHelp" className="form-text text-muted"></small>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="email" className="form-control" />
                                <small id="emailHelp" className="form-text text-muted"></small>
                            </div>
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button type="submit" className="btn btn-primary" onClick={ () => {this.props.viewFunction(false)}} >Close</button>
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