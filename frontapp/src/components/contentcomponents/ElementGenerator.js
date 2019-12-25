import React from 'react';


export class ElementGenerator extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="list-group">
                {this.props.Elements.map(element => (
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-6">
                                <small className="form-text"><span className="badge-light">id: {element.id}   alias: {element.alias}    parent: {element.parent}</span></small>
                                <p><b>{element.name}</b></p>
                            </div>
                            <div className="col-6 t-r">
                                <button className="btn btn-dark btn-m-pointer" onClick={ () => {this.props.funcEdit(element.id)} }><i className="far fa-edit"></i></button>
                                <button className="btn btn-dark btn-m-pointer" onClick={ () => {this.props.funcClone(element.id)} }><i className="far fa-clone"></i></button>
                                <button className="btn btn-dark btn-m-pointer" onClick={ () => {this.props.funcDelete(element.id)} }><i className="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}