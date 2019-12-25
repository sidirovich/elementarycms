
function MainComponent(){

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
            <ContentEditor />
            <AuthForm />
            <RegistForm />
            
            <div className="container">
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                        <small>Elementary CMS v0.0.1</small>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default MainComponent;