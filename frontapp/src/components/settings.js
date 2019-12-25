import React from 'react';

export class SettingsPopup extends React.Component{

    render(){
        let ElementEditorJSX;
        switch (this.props.switcher) {
            case true:
                ElementEditorJSX =(
                <div className="backgound-popup">
                    <div className="content-popup">
                        <h4>Settings</h4>
                        <hr />
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" />
                                <small id="emailHelp" className="form-text text-muted"></small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="email" className="form-control" />
                                <small id="emailHelp" className="form-text text-muted"></small>
                            </div>
                            <div className="form-group">
                                <label>Confirm password</label>
                                <input type="email" className="form-control" />
                                <small id="emailHelp" className="form-text text-muted"></small>
                            </div>
                            <button type="submit" className="btn btn-primary mr-2" onClick={ () => {this.props.viewFunction(false)}} >Save</button>
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