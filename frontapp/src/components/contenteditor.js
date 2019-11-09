import React from 'react';

let DataBaseJSON = {
    Elements: [
        
    ]
}

class InnerElements extends React.Component{

}

class PopUpEditor extends React.Component{

}

class ContentList extends React.Component{
    
}

export class ContentEditor extends React.Component{
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
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                        <div className="row">
                            <div className="col-6 t-l">
                                <h4>Content Editor</h4>
                            </div>
                            <div className="col-6 t-r pb-2">
                                <button className="btn btn-dark" type="button">Add value</button>
                            </div>
                        </div>

                        <div className="list-group">
                            <div className="list-group-item">
                                <div className="row">
                                    <div className="col-6">
                                        <p><b>Label 1</b></p>
                                    </div>
                                    <div className="col-6 t-r">
                                        <button className="btn btn-dark btn-m-pointer"><i className="far fa-edit"></i></button>
                                        <button className="btn btn-dark btn-m-pointer"><i className="far fa-clone"></i></button>
                                        <button className="btn btn-dark btn-m-pointer"><i className="fas fa-info-circle"></i></button>
                                        <button className="btn btn-dark btn-m-pointer"><i className="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <div className="row">
                                    <div className="col-6">
                                        <p><b>Label 2</b></p>
                                    </div>
                                    <div className="col-6 t-r">
                                        <button className="btn btn-dark btn-m-pointer"><i className="far fa-edit"></i></button>
                                        <button className="btn btn-dark btn-m-pointer"><i className="far fa-clone"></i></button>
                                        <button className="btn btn-dark btn-m-pointer"><i className="fas fa-info-circle"></i></button>
                                        <button className="btn btn-dark btn-m-pointer"><i className="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <div className="row">
                                    <div className="col-6">
                                        <p><b>Label 3</b></p>
                                    </div>
                                    <div className="col-6 t-r">
                                        <button className="btn btn-dark btn-m-pointer"><i className="far fa-folder-open"></i></button>
                                        <button className="btn btn-dark btn-m-pointer"><i className="far fa-clone"></i></button>
                                        <button className="btn btn-dark btn-m-pointer"><i className="fas fa-info-circle"></i></button>
                                        <button className="btn btn-dark btn-m-pointer"><i className="far fa-trash-alt"></i></button>
                                    </div>
                                </div>

                                <div className="list-group">
                                    <div class="list-group-item">
                                        <div className="row">
                                            <div className="col-6">
                                                <p><b>InnerLabel 1</b></p>
                                            </div>
                                            <div className="col-6 t-r">
                                                <button className="btn btn-dark btn-m-pointer"><i className="far fa-edit"></i></button>
                                                <button className="btn btn-dark btn-m-pointer"><i className="far fa-clone"></i></button>
                                                <button className="btn btn-dark btn-m-pointer"><i className="fas fa-info-circle"></i></button>
                                                <button className="btn btn-dark btn-m-pointer"><i className="far fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div className="row">
                                            <div className="col-6">
                                                <p><b>InnerLabel 2</b></p>
                                            </div>
                                            <div className="col-6 t-r">
                                                <button className="btn btn-dark btn-m-pointer"><i className="far fa-edit"></i></button>
                                                <button className="btn btn-dark btn-m-pointer"><i className="far fa-clone"></i></button>
                                                <button className="btn btn-dark btn-m-pointer"><i className="fas fa-info-circle"></i></button>
                                                <button className="btn btn-dark btn-m-pointer"><i className="far fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div className="row">
                                            <div className="col-6">
                                                <p><b>InnerLabel 3</b></p>
                                            </div>
                                            <div className="col-6 t-r">
                                                <button className="btn btn-dark btn-m-pointer"><i className="far fa-edit"></i></button>
                                                <button className="btn btn-dark btn-m-pointer"><i className="far fa-clone"></i></button>
                                                <button className="btn btn-dark btn-m-pointer"><i className="fas fa-info-circle"></i></button>
                                                <button className="btn btn-dark btn-m-pointer"><i className="far fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}